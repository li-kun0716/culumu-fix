import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  return (
    <Flex style={{ width: '100%', minHeight: '100vh' }} align="center" justify="center">
      <Flex vertical align="center" gap={16}>
        <Spin
          indicator={
            <LoadingOutlined
              style={{ fontSize: 24 }}
              spin
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          }
        />
        <p style={{ fontSize: '14px', color: 'gray', textTransform: 'uppercase' }}>Loading</p>
      </Flex>
    </Flex>
  );
}
