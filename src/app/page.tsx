'use client';

import React from 'react';
import Link from 'next/link';
import { Flex, Typography } from 'antd';

import { useTranslation } from '@/i18n/client';

const Home: React.FC = () => {
  const { t } = useTranslation('translation');
  const { Title } = Typography;
  const str = t('translation:homePageTest.text');

  return (
    <Flex vertical>
      <Title>{t('title')}</Title>
      <Flex className="bg-amber-200" style={{ width: '500px', height: '100px', padding: '10px' }}>
        {str}
      </Flex>
      <Link href="/auth/login">LINE LOGIN</Link>
      <Flex style={{ marginTop: '10px' }}>
        <Link href={`/second-page`}>{t('to-second-page')}</Link>
        <Link href={`/client-page`} style={{ marginLeft: '20px' }}>
          {t('to-client-page')}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Home;
