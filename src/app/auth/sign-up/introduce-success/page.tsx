'use client';

import { Flex, Typography, Image } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/antd';
import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();

  return (
    <>
      <Flex vertical justify="center" align="center">
        <Typography.Title style={{ fontSize: '22px', margin: '64px 0 16px' }}>
          {t('signUp.introduceSuccess.title')}
        </Typography.Title>
        <Typography.Text style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '16px' }}>
          {t('signUp.introduceSuccess.description')}
        </Typography.Text>
        <Image src="/images/badge.png" style={{ marginLeft: '-10%', marginTop: '62px' }} alt={''} />
      </Flex>
      <Flex
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #D9D9D9',
          padding: '16px 20px',
          boxSizing: 'border-box',
          backgroundColor: colors.white
        }}
      >
        <Button
          type="outline"
          onClick={() => router.push('/')}
          style={{
            height: '64px',
            width: '100%',
            fontSize: '16px',
            fontWeight: 600,
            backgroundColor: colors.accent[800],
            color: colors.white
          }}
        >
          {t('signUp.introduceSuccess.returnToLine')}
        </Button>
      </Flex>
    </>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Page;
