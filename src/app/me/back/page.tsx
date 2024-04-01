'use client';

import React from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Typography, Space } from 'antd';
import { useTranslation } from '@/i18n/client';
import colors from '@/theme/colors';
const { Text } = Typography;

export default function Page() {
  const { t } = useTranslation();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#FBF9F6' }}>
      <header style={{ padding: '32px 24px', height: '29px' }}>
        <Text
          strong
          style={{ color: colors.gray[900], letterSpacing: '0.57px', fontSize: '19px', lineHeight: '28.5px' }}
        >
          {t('backPage.title')}
        </Text>
      </header>
      <main>
        <div style={{ margin: '0 20px' }}>
          <Space direction="vertical" size={10}>
            <Space direction="vertical" size={30}>
              <Text style={{ fontSize: '15px', color: colors.gray[900] }}>{t('backPage.p1')}</Text>
              <Text style={{ fontSize: '11px', color: colors.gray[700], letterSpacing: '0.3px' }}>
                {t('backPage.p2')}
              </Text>
            </Space>
            <TextArea placeholder={t('backPage.placeholder')} style={{ minHeight: '69px' }} autoSize={true}></TextArea>
          </Space>
        </div>
      </main>
    </div>
  );
}
