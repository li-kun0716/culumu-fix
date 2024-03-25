'use client';

import React from 'react';
import { Flex, Typography, Input } from 'antd';
import { useRouter } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import colors from '@/theme/colors';
import { Button } from '@/components/antd';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const { TextArea } = Input;
  const router = useRouter();

  const buttonStyle = { height: '64px', fontSize: '16px', fontWeight: 600 };

  return (
    <Flex vertical justify="center" align="center" style={{ padding: '0 20px' }}>
      <Typography.Title style={{ fontSize: '22px', margin: '64px 0 16px' }}>
        {t('signUp.introduce.title')}
      </Typography.Title>
      <Typography.Text style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '16px' }}>
        {t('signUp.introduce.description')}
      </Typography.Text>
      <div style={{ margin: '100px 0', width: '100%' }}>
        <TextArea rows={6} placeholder={t('signUp.introduce.tip')} style={{ padding: '12px 16px' }} maxLength={500} />
      </div>
      <Flex
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #D9D9D9',
          padding: '20px',
          boxSizing: 'border-box',
          backgroundColor: colors.white
        }}
      >
        <Button
          type="outline"
          style={{ ...buttonStyle, width: '35%', color: colors.accent[800], marginRight: '20px', borderWidth: '2px' }}
        >
          {t('common:skip')}
        </Button>
        <Button
          type="outline"
          onClick={() => router.push('/auth/sign-up/introduce-success')}
          style={{ ...buttonStyle, width: '65%', backgroundColor: colors.accent[800], color: colors.white }}
        >
          {t('signUp.complete')}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Page;
