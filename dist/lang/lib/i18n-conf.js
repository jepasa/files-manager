// @ts-nocheck
// SPDX-License-Identifier: All Rights Reserved
/**
 * @file src/lang/lib/i18n-conf.js
 * @fileoverview Configuração central do adapter i18n do Files-Manager.
 */
export const DEFAULT_LOCALE = 'pt-BR';
export const GLOBAL_KEY = 'FilesManagerLangLocales';
export const GLOBAL_LOCALE_CALLBACK_KEY = `${GLOBAL_KEY}Callback`;
export const SHORT_TO_CANONICAL = {
    pt: 'pt-BR',
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    zh: 'zh-CN',
};
export const ROOT_REF = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : null;
export function getAdapterDictionaries(baseDictionaries = {}) {
    const dictionaries = { ...baseDictionaries };
    const injectedLocales = ROOT_REF?.[GLOBAL_KEY];
    if (!injectedLocales || typeof injectedLocales !== 'object') {
        return dictionaries;
    }
    Object.entries(injectedLocales).forEach(([locale, dictionary]) => {
        if (dictionary && typeof dictionary === 'object') {
            dictionaries[locale] = dictionary;
        }
    });
    return dictionaries;
}
