'use client';
import React, { useState } from 'react';
import { Flex } from 'antd';

import { Button } from '@/components/antd/Button';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex className="container gap-5 h-20 bg-amber-50" justify="center" align="center">
      <p className="text-justify">You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click Me
      </Button>
    </Flex>
  );
};

export default Counter;
