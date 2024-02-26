import { createInstance, Namespace } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { defaultNS, fallbackLng, getOptions } from './settings';

const initI18next = async (lng: string, ns?: string | readonly string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.ts`)))
    .init(getOptions(lng, ns));

  return i18nInstance;
};

// TODO 多言語対応
export async function useTranslation(ns: Namespace = defaultNS) {
  const i18nextInstance = await initI18next(fallbackLng, ns);

  return {
    t: i18nextInstance.getFixedT(fallbackLng, ns),
    i18n: i18nextInstance
  };
}
