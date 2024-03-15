'use client';

import colors from '@/theme/colors';
import { Flex } from 'antd';

type PropsType = {
  curStep: 1 | 2 | 3;
};

const FlowStepBar: React.FC<PropsType> = ({ curStep }) => {
  const stepList = [1, 2, 3];

  return (
    <Flex
      style={{
        width: 'fit-content',
        margin: '0 auto'
      }}
    >
      {stepList.map((step) => (
        <Flex align="center" key={step}>
          <Flex
            align="center"
            justify="center"
            style={{
              minWidth: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: curStep >= step ? '#E74B35' : colors.gray[300],
              color: curStep >= step ? colors.white : colors.gray[700],
              fontWeight: 600
            }}
          >
            {step}
          </Flex>
          {step !== 3 && (
            <div
              style={{
                width: 73,
                height: 2,
                margin: '0 10px',
                backgroundColor: curStep >= step ? 'red' : colors.gray[300]
              }}
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default FlowStepBar;
