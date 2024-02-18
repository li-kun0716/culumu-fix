'use client';

import React from 'react';

import { useTranslation } from '@/i18n/client';

import { Base } from './Base';

export const Client: React.FC<{ lng: string }> = ({ lng }) => {
  // const { t } = useTranslation(lng, 'translation'); TODO 多言語対応
  const { t } = useTranslation('translation');

  return <Base t={t} currentLng={lng} />;
};
