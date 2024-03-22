'use client';

import React from 'react';
import { Flex, Typography, Image } from 'antd';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/antd';
import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();

  const itemList: { image: string; title: number; description: string }[] = [
    {
      image: '/images/myself-to-articipate.png',
      title: t('signUp.topSecondTitle'),
      description: t('authPage.signUp.topSecondText')
    },
    {
      image: '/images/introduce-someone.png',
      title: t('authPage.signUp.bottomSecondTitle'),
      description: t('authPage.signUp.bottomSecondText')
    }
  ];

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        overflow: 'hidden',
        backgroundImage: 'url(/images/auth-top-icon.png),url(/images/auth-bottom-icon.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right -68px, left bottom',
        padding: '40px 24px',
        boxSizing: 'border-box',
        backgroundColor: colors.gray[100]
      }}
    >
      <Flex align="center" style={{ flexDirection: 'column', height: 'calc(100vh - 80px)', paddingTop: '8px' }}>
        <Image src="/images/logo.png" alt="logo" width={306} height={34.3} style={{ backgroundSize: 'contain' }} />
        <Typography
          style={{
            textAlign: 'center',
            marginTop: '48px',
            marginBottom: '32px',
            fontSize: '16px',
            fontWeight: 300,
            letterSpacing: '.48px'
          }}
        >
          {t('authPage.signUp.title')}
        </Typography>
        <Flex gap="20px" style={{ flexDirection: 'column', width: '100%', flexWrap: 'wrap' }}>
          {itemList.map((item) => (
            <Flex
              key={item.title}
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '20px',
                gap: '17.8px',
                boxSizing: 'border-box'
              }}
            >
              <Image src={item.image} alt={''} width={126} height={106} style={{ minWidth: 126 }} />
              <Flex style={{ flexDirection: 'column' }}>
                <Typography
                  style={{
                    fontSize: '19px',
                    lineHeight: '150%',
                    fontWeight: 600,
                    marginBottom: '8px',
                    letterSpacing: '.57px'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{
                    fontSize: '14px',
                    lineHeight: '150%',
                    fontWeight: 300,
                    color: colors.gray[700],
                    letterSpacing: '.42px'
                  }}
                >
                  {item.description}
                </Typography>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Button
          type="outline"
          style={{
            height: '64px',
            width: '100%',
            marginTop: '64px',
            backgroundColor: colors.accent[800],
            color: colors.white,
            fontSize: '16px',
            fontWeight: 600
          }}
          onClick={() => router.push('/auth/sign-up/about')}
        >
          登録を開始する
        </Button>
      </Flex>
    </Flex>
  );
};

export default Page;
