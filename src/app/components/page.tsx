'use client';

import React from 'react';
import { Flex, Space } from 'antd';

import Counter from '@/components/Counter';
import { Button, Input } from '@/components/antd';

const Page: React.FC = () => {
  return (
    <Flex className="container" vertical>
      <span>Components</span>
      <Flex className="container gap-5" align="center" style={{ marginTop: '20px' }} vertical={false}>
        <span>Button: </span>
        <Flex className="gap-5" align="center">
          <Button type="primary">Primary Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <Button type="outline">Dashed Button</Button>
          <Button>Default Button</Button>
        </Flex>
      </Flex>
      <Flex className="container gap-5" align="center" style={{ marginTop: '20px' }} vertical={false}>
        <span>Input: </span>
        <Flex className="gap-5" align="center">
          <Input size="large" style={{ width: 200 }} />
          <Space.Compact>
            <Input size="large" style={{ width: '20%' }} defaultValue="0571" />
            <Input size="large" style={{ width: '80%' }} defaultValue="26888888" />
          </Space.Compact>
        </Flex>
      </Flex>
      <Flex style={{ marginTop: '20px' }}>
        <Counter />
      </Flex>
    </Flex>
  );
};

export default Page;
