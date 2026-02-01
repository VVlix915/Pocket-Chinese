import { translations } from '../data/translations.js';
import { getCurrentLang } from './state.js';

export function t(key) {
    const keys = key.split('.');
    let value = translations[getCurrentLang()];
    for (const k of keys) {
        value = value[k];
    }
    return value;
}
