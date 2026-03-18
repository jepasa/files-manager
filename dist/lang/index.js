// @ts-nocheck
// SPDX-License-Identifier: All Rights Reserved
/**
 * @file lang/index.js
 * @fileoverview Entrada pública da distribuição modular do i18n.
 *
 * Esta fachada mantém a API histórica em src/lang/index.js, mas agora usa o
 * mesmo bootstrap compartilhado pelo bundle. A diferença entre dist e bundle
 * fica limitada à configuração inicial dos dicionários.
 */
import deDE from './de-DE.js';
import enUS from './en-US.js';
import esES from './es-ES.js';
import frFR from './fr-FR.js';
import ptBR from './pt-BR.js';
import zhCN from './zh-CN.js';
import { DEFAULT_LOCALE, GLOBAL_KEY, ROOT_REF, SHORT_TO_CANONICAL, getAdapterDictionaries, } from './lib/i18n-conf.js';
import { createI18nEntry } from './lib/i18n-entry.js';
const entry = createI18nEntry({
    defaultLocale: DEFAULT_LOCALE,
    globalKey: GLOBAL_KEY,
    shortToCanonical: SHORT_TO_CANONICAL,
    dictionaries: getAdapterDictionaries({
        'de-DE': deDE,
        'en-US': enUS,
        'es-ES': esES,
        'fr-FR': frFR,
        'pt-BR': ptBR,
        'zh-CN': zhCN,
    }),
    rootRef: ROOT_REF,
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
