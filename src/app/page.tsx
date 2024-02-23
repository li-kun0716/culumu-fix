import React from 'react';
import Link from 'next/link';
import { Flex } from 'antd';

import { useTranslation } from '@/i18n';

const Home: React.FC = async () => {
  const { t } = await useTranslation('translation');

  const str = t('translation:homePageTest.text');

  return (
    <Flex vertical>
      <h1>{t('title')}</h1>
      <Flex className="bg-amber-200" style={{ width: '500px', height: '100px', padding: '10px' }}>
        {str}
      </Flex>
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
