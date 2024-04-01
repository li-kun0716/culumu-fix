import React from 'react';
import type { Metadata } from 'next';
import { App } from 'antd';
import { dir } from 'i18next';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { ThemeProvider } from '@/theme';
import { fallbackLng } from '@/i18n/settings';
import './globals.css';
import colors from '@/theme/colors';

// TODO
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const RootLayout: React.FC<Readonly<{ children: React.ReactNode; params: { lng?: string } }>> = ({
  children,
  params: { lng = fallbackLng }
}) => (
  <html lang={lng} dir={dir(lng)}>
    <body>
      <div style={{ minHeight: '100vh', backgroundColor: colors.gray[100] }}>
        <AntdRegistry>
          <ThemeProvider>
            <App>{children}</App>
          </ThemeProvider>
        </AntdRegistry>
      </div>
    </body>
  </html>
);

export default RootLayout;
