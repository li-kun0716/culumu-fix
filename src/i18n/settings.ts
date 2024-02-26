import { InitOptions } from 'i18next';

import locales from './locales';

export const fallbackLng = 'ja';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns: string | readonly string[] = defaultNS): InitOptions {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    returnObjects: true,
    resources: locales
  };
}
