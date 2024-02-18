'use client';

import { ThemeConfig } from 'antd/es/config-provider/context';
import useTheme from 'antd/es/config-provider/hooks/useTheme';

import { config } from './index';

export const useAntdTheme = (themeConfig: ThemeConfig = config, parentTheme?: ThemeConfig) => {
  return useTheme(themeConfig, parentTheme);
};
