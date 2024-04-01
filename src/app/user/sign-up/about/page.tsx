'use client';

import React from 'react';
import { Typography } from 'antd';

import { useTranslation } from '@/i18n/client';
import FlowStepBar from '@/app/components/sign-up/FlowStepBar';
import { Form } from '@/app/user/sign-up/about/Form';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');

  return (
    <div style={{ padding: '32px 24px 144px' }}>
      <FlowStepBar curStep={1} />
      <div style={{ padding: '16px 0' }}>
        <Typography style={{ fontSize: 22, fontWeight: 600, marginBottom: '6px', textAlign: 'center' }}>
          {t('signUp.about.title')}
        </Typography>
        <Typography>{t('signUp.about.tip')}</Typography>
      </div>
      <Form />
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Page;
