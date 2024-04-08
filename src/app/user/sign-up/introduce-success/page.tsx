'use client';

import { Flex, Typography, Image, Tooltip } from 'antd';
import React from 'react';

import { useTranslation } from '@/i18n/client';

import colors from '@/theme/colors';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');

  return (
    <Flex vertical justify="center" align="center">
      <Tooltip
        placement="bottomRight"
        title={'タップで画面を閉じる'}
        defaultOpen={true}
        color={colors.white}
        overlayInnerStyle={{
          backgroundColor: colors.white,
          color: colors.black,
          fontSize: 17,
          fontWeight: 600,
          padding: '11px 15px'
        }}
      >
        <div style={{ position: 'absolute', right: 20, top: 0 }} />
      </Tooltip>
      <Typography.Title style={{ fontSize: '22px', margin: '80px 0 16px' }}>
        {t('signUp.introduceSuccess.title')}
      </Typography.Title>
      <Typography.Text style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '16px' }}>
        {t('signUp.introduceSuccess.description')}
      </Typography.Text>
      <Image src="/images/badge.png" style={{ marginTop: '62px' }} alt={''} />
      <Typography.Text style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '16px', marginTop: 16 }}>
        {t('signUp.introduceSuccess.tips')}
      </Typography.Text>
    </Flex>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Page;
