import React from 'react';
import Link from 'next/link';
import { Flex } from 'antd';

import { useTranslation } from '@/i18n';

const Page: React.FC = async () => {
  const { t } = await useTranslation('second-page');

  const str = t('second-page:secondPageTest.text');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Flex className="bg-amber-200" style={{ width: '500px', height: '100px', padding: '10px' }}>
        {str}
      </Flex>
      <Flex style={{ marginTop: '10px' }}>
        <Link href={`/`}>{t('back-to-home')}</Link>
      </Flex>
    </div>
  );
};

export default Page;
