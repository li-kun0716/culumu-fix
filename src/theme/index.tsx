import React from 'react';
import { ConfigProvider } from 'antd';
import { JSX } from 'react/jsx-runtime';
import { ThemeConfig } from 'antd/es/config-provider/context';

import colors from './colors';
import typography from './typography';

import IntrinsicAttributes = JSX.IntrinsicAttributes;

export const config: ThemeConfig = {
  token: {
    orange: colors.accent['800'],
    colorBgBase: colors.white,

    colorPrimary: colors.accent['800'],
    colorInfo: colors.accent['800'],
    colorSuccess: colors.status.success,
    colorWarning: colors.status.warning,
    colorError: colors.status.danger,

    colorTextBase: typography.color,
    colorLink: typography.colorLink,
    fontFamily: typography.fontFamily,
    // fontSize: default 14
    lineWidth: 1,
    borderRadius: 10
  }
};

export const ThemeProvider: React.FC<Readonly<{ children: React.ReactNode; themeConfig?: ThemeConfig }>> = ({
  children,
  themeConfig = config
}) => <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;

export function withTheme<T extends IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
  componentThemeConfig?: ThemeConfig
) {
  const ComponentWithTheme: React.FC<T> = (props) => (
    <ThemeProvider themeConfig={componentThemeConfig}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );

  // ComponentWithTheme.displayName = `WithTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ComponentWithTheme;
}
