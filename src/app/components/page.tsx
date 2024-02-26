import React from 'react';
import { Flex } from 'antd';

import Counter from '@/components/Counter';
import { Button } from '@/components/antd/Button';

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
          <Button type="test">Dashed Button</Button>
          <Button>Default Button</Button>
        </Flex>
      </Flex>
      <Flex style={{ marginTop: '20px' }}>
        <Counter />
      </Flex>
    </Flex>
  );
};

export default Page;
