'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flex, Typography } from 'antd';

import { useTranslation } from '@/i18n/client';
import { Button } from '@/components/antd/Button';

const Page: React.FC = () => {
  const { t } = useTranslation('client-page');
  const [counter, setCounter] = useState(0);

  const str = t('client-page:clientPageTest.obj.funObj');

  return (
    <Flex vertical>
      <Typography.Title level={2}>{t('title')}</Typography.Title>
      <Flex className="bg-amber-200" style={{ width: '500px', height: '100px', padding: '10px' }}>
        <Typography.Text>{str(1, '11')}</Typography.Text>
      </Flex>
      <Flex align="center" style={{ marginTop: '10px' }}>
        <Typography.Text>{t('counter', { count: counter })}</Typography.Text>
        <Button type="outline" style={{ marginLeft: '5px' }} onClick={() => setCounter(Math.max(0, counter - 1))}>
          -
        </Button>
        <Button type="primary" style={{ marginLeft: '5px' }} onClick={() => setCounter(Math.min(10, counter + 1))}>
          +
        </Button>
      </Flex>
      <Flex style={{ marginTop: '20px' }}>
        <Link href={`/`}>{t('back-to-home')}</Link>
      </Flex>
    </Flex>
  );
};

export default Page;
