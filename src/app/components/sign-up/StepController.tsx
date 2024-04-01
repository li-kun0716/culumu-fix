'use client';

import React from 'react';
import { Flex } from 'antd';

import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';

import { Button } from '../antd';

type PropsType = {
  loading: boolean;
  onReturn: () => void;
  onNext: () => void;
};

const StepController: React.FC<PropsType> = ({ onReturn, onNext, loading }) => {
  const { t } = useTranslation();

  return (
    <Flex
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #D9D9D9',
        padding: '16px 20px',
        boxSizing: 'border-box',
        backgroundColor: colors.white,
        gap: 20,
        zIndex: 9999
      }}
    >
      <Button
        type="outline"
        style={{
          height: '64px',
          fontSize: '16px',
          fontWeight: 600,
          padding: '17px 41px',
          backgroundColor: colors.white,
          border: `2px solid ${colors.accent[800]}`,
          color: colors.accent[800]
        }}
        onClick={onReturn}
      >
        {t('common:return')}
      </Button>
      <Button
        type="outline"
        style={{
          height: '64px',
          width: '100%',
          fontSize: '16px',
          fontWeight: 600,
          backgroundColor: colors.accent[800],
          color: colors.white
        }}
        onClick={onNext}
        loading={loading}
        disabled={loading}
      >
        {t('common:next')}
      </Button>
    </Flex>
  );
};

export default StepController;
