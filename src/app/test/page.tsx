'use client';
import React, { Suspense } from 'react';
import { Typography, Space, Flex, Col, Row, Card } from 'antd';
const { Text } = Typography;

export default async function Test() {
  const [data, data2] = await Promise.all([getData(), getData2()]);
  return (
    <Suspense fallback={<div>loading</div>}>
      <Space size={20}>
        <Text>{data.data}</Text> <Text>{data.id}</Text>
      </Space>
      <Space size={20}>
        <Text italic>{data2.data}</Text> <Text>{data2.id}</Text>
      </Space>
      <Flex gap={20} justify="space-between" align="center" className="h-[100px]">
        <Text strong style={{ fontSize: '26px' }}>
          {data2.data}
        </Text>
        <Text copyable>{data2.id}</Text>
      </Flex>
      <section>
        <Row gutter={16}>
          <Col span={8}>
            <div className="h-10 bg-purple-50">1</div>
          </Col>
          <Col span={8}>2</Col>
          <Col span={8}>3</Col>
        </Row>
      </section>

      <Flex justify="center" className="mt-[10px]">
        <Card title="This is a Card" style={{ width: '300px' }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni consectetur dolor quae, maxime possimus
            eveniet, doloremque vero dolore nihil quibusdam soluta pariatur quidem nemo itaque rem repellendus.
            Distinctio, adipisci corrupti!
          </p>
        </Card>
      </Flex>
    </Suspense>
  );
}

export async function getData(): Promise<{ data: string; id: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Hello, world!', id: 1 }); // 模拟异步数据
    }, 500);
  });
}

export async function getData2(): Promise<{ data: string; id: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Hello, li hua!', id: 2 }); // 模拟异步数据
    }, 500);
  });
}
