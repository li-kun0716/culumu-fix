import React from 'react';

import { useTranslation } from '@/i18n';

import { Base } from './Base';

export const Server: React.FC<{ lng: string }> = async ({ lng }) => {
  // const { t } = await useTranslation(lng, 'translation');　TODO　多言語対応
  const { t } = await useTranslation('translation');
  return <Base t={t} currentLng={lng} />;
};
