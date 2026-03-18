// @ts-nocheck
// SPDX-License-Identifier: All Rights Reserved
/**
 * @file src/lang/lib/i18n-entry.js
 * @fileoverview Bootstrap compartilhado para as entradas públicas do i18n.
 *
 * A distribuição modular e o bundle público expõem a mesma API. A diferença
 * entre eles fica restrita à configuração inicial: dicionários embutidos,
 * locale padrão e suporte ao callback de bootstrap do bundle.
 */
import { createManager } from './i18n-core.min.js';
const KNOWN_CALLBACK_KEYS = [
    'defaultLocale',
    'globalKey',
    'shortToCanonical',
    'dictionaries',
    'locales',
];
function isRecord(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function normalizeCallbackPayload(payload) {
    if (!isRecord(payload)) {
        return {};
    }
    const hasKnownKeys = KNOWN_CALLBACK_KEYS.some((key) => Object.prototype.hasOwnProperty.call(payload, key));
    if (!hasKnownKeys) {
        return { dictionaries: payload };
    }
    return payload;
}
function mergeDictionaries(...sources) {
    return sources.reduce((accumulator, source) => {
        if (!isRecord(source)) {
            return accumulator;
        }
        Object.entries(source).forEach(([locale, dictionary]) => {
            if (isRecord(dictionary)) {
                accumulator[locale] = dictionary;
            }
        });
        return accumulator;
    }, {});
}
function resolveCallbackConfig(baseConfig) {
    const callbackRef = baseConfig.rootRef?.[`${baseConfig.globalKey}Callback`];
    if (typeof callbackRef !== 'function') {
        return {};
    }
    try {
        return normalizeCallbackPayload(callbackRef({
            defaultLocale: baseConfig.defaultLocale,
            globalKey: baseConfig.globalKey,
            shortToCanonical: { ...baseConfig.shortToCanonical },
            dictionaries: { ...baseConfig.dictionaries },
        }));
    }
    catch {
        return {};
    }
}
function resolveEntryConfig(options) {
    const baseConfig = {
        defaultLocale: typeof options.defaultLocale === 'string' ? options.defaultLocale : 'pt-BR',
        globalKey: typeof options.globalKey === 'string' && options.globalKey.trim()
            ? options.globalKey.trim()
            : 'FilesManagerLangLocales',
        shortToCanonical: isRecord(options.shortToCanonical) ? options.shortToCanonical : {},
        dictionaries: mergeDictionaries(options.dictionaries),
        rootRef: options.rootRef ?? null,
    };
    if (options.allowBootstrapCallback !== true) {
        return baseConfig;
    }
    const callbackConfig = resolveCallbackConfig(baseConfig);
    return {
        defaultLocale: typeof callbackConfig.defaultLocale === 'string' && callbackConfig.defaultLocale.trim()
            ? callbackConfig.defaultLocale.trim()
            : baseConfig.defaultLocale,
        globalKey: typeof callbackConfig.globalKey === 'string' && callbackConfig.globalKey.trim()
            ? callbackConfig.globalKey.trim()
            : baseConfig.globalKey,
        shortToCanonical: isRecord(callbackConfig.shortToCanonical)
            ? { ...baseConfig.shortToCanonical, ...callbackConfig.shortToCanonical }
            : { ...baseConfig.shortToCanonical },
        dictionaries: mergeDictionaries(baseConfig.dictionaries, callbackConfig.dictionaries, callbackConfig.locales),
        rootRef: baseConfig.rootRef,
    };
}
function createEntryExports(manager) {
    const availableLanguages = [];
    function syncAvailableLanguages() {
        availableLanguages.splice(0, availableLanguages.length, ...manager.getAvailableLocales());
    }
    syncAvailableLanguages();
    return {
        manager,
        AVAILABLE_LANGUAGES: availableLanguages,
        createI18n(options) {
            return manager.createI18n(options);
        },
        getStrings(locale) {
            return manager.getStrings(locale);
        },
        normalizeLocale(locale, fallback) {
            return manager.normalizeLocale(locale, fallback);
        },
        getLocaleFromEnvironment() {
            return manager.getLocaleFromEnvironment();
        },
        getLocaleFromDocument() {
            return manager.getLocaleFromDocument();
        },
        hasLocale(locale) {
            return manager.hasLocale(locale);
        },
        registerLocale(locale, strings) {
            const result = manager.registerLocale(locale, strings);
            syncAvailableLanguages();
            return result;
        },
        registerLocales(locales) {
            const registeredLocales = [];
            Object.entries(locales || {}).forEach(([locale, strings]) => {
                if (this.registerLocale(locale, strings)) {
                    registeredLocales.push(this.normalizeLocale(locale, locale));
                }
            });
            syncAvailableLanguages();
            return registeredLocales;
        },
        async loadLocale(locale, options) {
            const loaded = await manager.loadLocale(locale, options);
            syncAvailableLanguages();
            return loaded;
        },
    };
}
export function createI18nEntry(options = {}) {
    const manager = createManager(resolveEntryConfig(options));
    return createEntryExports(manager);
}
