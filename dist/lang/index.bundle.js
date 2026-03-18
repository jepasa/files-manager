// @ts-nocheck
// SPDX-License-Identifier: All Rights Reserved
/**
 * @file lang/index.bundle.js
 * @fileoverview Entrada pública do bundle monolítico.
 *
 * O bundle sai mínimo por padrão: inclui apenas en-US e aceita enriquecimento
 * por callback/global antes do primeiro uso. A API exportada continua idêntica
 * à da distribuição modular.
 */
import enUS from './en-US.js';
import { GLOBAL_KEY, ROOT_REF, SHORT_TO_CANONICAL } from './lib/i18n-conf.js';
import { createI18nEntry } from './lib/i18n-entry.js';
const DEFAULT_LOCALE = 'en-US';
const entry = createI18nEntry({
    defaultLocale: DEFAULT_LOCALE,
    globalKey: GLOBAL_KEY,
    shortToCanonical: SHORT_TO_CANONICAL,
    dictionaries: {
        'en-US': enUS,
    },
    rootRef: ROOT_REF,
    allowBootstrapCallback: true,
});
export const AVAILABLE_LANGUAGES = entry.AVAILABLE_LANGUAGES;
export const createI18n = entry.createI18n;
export const getStrings = entry.getStrings;
export const normalizeLocale = entry.normalizeLocale;
export const getLocaleFromEnvironment = entry.getLocaleFromEnvironment;
export const getLocaleFromDocument = entry.getLocaleFromDocument;
export const hasLocale = entry.hasLocale;
export const registerLocale = entry.registerLocale;
export const registerLocales = entry.registerLocales;
export const loadLocale = entry.loadLocale;
export default entry.manager;
