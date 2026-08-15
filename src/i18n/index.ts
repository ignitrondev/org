export const langLabels = { en: '🇬🇧 EN', id: '🇮🇩 ID', zh: '🇨🇳 中文' } as const;
export type Lang = keyof typeof langLabels;
export const defaultLang: Lang = 'en';
