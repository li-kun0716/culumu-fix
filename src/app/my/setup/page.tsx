'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';
import { Button, Card, Flex, Typography } from 'antd';
const { Text } = Typography;

export default function Page() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'rgb(66 66 66 / 0.7)',
        position: 'relative'
      }}
    >
      <Card
        styles={{
          body: {
            padding: '0'
          }
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '78%',
          boxSizing: 'border-box',
          padding: '32px 10px 24px 10px',
          borderRadius: '16px'
        }}
      >
        <Text
          strong
          style={{
            fontSize: '22px',
            lineHeight: '33px',
            padding: '0 12px',
            letterSpacing: '0.66px',
            textAlign: 'center',
            display: 'inline-block'
          }}
        >
          {t('setupPage.text')}
        </Text>

        <Flex justify="center">
          <Image src="/images/Group627725.png" width={140} height={169} alt="icon" />
        </Flex>

        <Flex style={{ padding: '20px' }}>
          <Button
            style={{
              fontWeight: 600,
              fontSize: '16px',
              width: '100%',
              height: '64px',
              borderRadius: '10px',
              backgroundColor: '#E76B00',
              color: '#fff'
            }}
          >
            {t('setupPage.button')}
          </Button>
        </Flex>
      </Card>
    </div>
  );
}
