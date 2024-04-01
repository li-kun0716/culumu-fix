import { Flex, Spin } from 'antd';

export default function Loading() {
  return (
    <Flex style={{ width: '100%', minHeight: '100vh' }} align="center" justify="center">
      <Flex vertical align="center" gap={16}>
        <Spin size="large"></Spin>
        <p style={{ fontSize: '18px', color: 'gray', textTransform: 'uppercase' }}>Loading</p>
      </Flex>
    </Flex>
  );
}
