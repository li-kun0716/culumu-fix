'use client';

import { useEffect, useState } from 'react';
import i18next, { Namespace } from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg, UseTranslationOptions } from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { isClient } from '@/utils/isClient';

import { getOptions, languages, cookieName, fallbackLng, defaultNS } from './settings';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.ts`)))
  .init({
    ...getOptions(),
    // let detect the language on client side
    lng: undefined,
    detection: { order: ['path', 'htmlTag', 'cookie', 'navigator'] },
    preload: !isClient() ? languages : []
  })
  .then(() => {});

// TODO 多言語対応
export function useTranslation(ns: Namespace = defaultNS, options?: UseTranslationOptions<undefined>) {
  const lng = fallbackLng;
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  if (isClient()) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng !== i18n.resolvedLanguage) setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.resolvedLanguage !== lng) i18n.changeLanguage(lng).then(() => {});
    }, [i18n, lng]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies[cookieName] == lng) setCookie(cookieName, lng, { path: '/' });
    }, [cookies, lng, setCookie]);
  } else {
    if (i18n.resolvedLanguage !== lng) i18n.changeLanguage(lng).then(() => {});
  }

  return ret;
}
