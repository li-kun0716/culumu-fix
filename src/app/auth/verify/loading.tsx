import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loading: React.FC = () => (
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
);

export default Loading;
