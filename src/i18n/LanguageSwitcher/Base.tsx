import React from 'react';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { Namespace, TFunction } from 'i18next';

import { fallbackLng, languages } from '@/i18n/settings';

export const Base: React.FC<{ t: TFunction<Namespace, undefined>; currentLng: string }> = ({
  t,
  currentLng = fallbackLng
}) => (
  <div>
    <Trans i18nKey="languageSwitcher" t={t} values={{ currentLng: currentLng }}>
      Switch from <strong>{currentLng}</strong> to:{' '}
    </Trans>
    {languages
      .filter((l) => currentLng !== l)
      .map((l, index) => (
        <span key={l}>
          {index > 0 && ' or '}
          <Link href={`/${l}`}>{l}</Link>
        </span>
      ))}
  </div>
);
