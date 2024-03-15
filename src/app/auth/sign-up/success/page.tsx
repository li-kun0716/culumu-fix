'use client';

import { Flex, Typography, Image } from 'antd';
import { Button } from '@/components/antd';
import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');

  return (
    <>
      <Flex vertical justify="center" align="center">
        <Typography.Title
          style={{
            fontSize: '22px',
            marginTop: '64px'
          }}
        >
          {t('signUp.success.title')}
        </Typography.Title>
        <Typography.Text
          style={{
            whiteSpace: 'pre-wrap',
            textAlign: 'center'
          }}
        >
          {t('signUp.success.description')}
        </Typography.Text>
        <Image
          src="/images/phone.png"
          style={{
            marginLeft: '-10%',
            marginTop: '62px'
          }}
        />
      </Flex>

      <Flex
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #D9D9D9',
          padding: '16px 20px',
          boxSizing: 'border-box',
          backgroundColor: colors.white
        }}
      >
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
        >
          {t('common:next')}
        </Button>
      </Flex>
    </>
  );
};

export default Page;
