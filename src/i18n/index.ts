import en from './en.json';
import id from './id.json';
import zh from './zh.json';

export const languages = { en, id, zh } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langLabels: Record<Lang, string> = { en: '🇬🇧 EN', id: '🇮🇩 ID', zh: '🇨🇳 中文' };

export function t(key: string, lang: Lang = defaultLang): string {
    const keys = key.split('.');
    let value: any = languages[lang];
    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
            // Fallback to English
            let fallback: any = languages.en;
            for (const fk of keys) fallback = fallback?.[fk];
            return fallback ?? key;
        }
    }
    return value;
}
