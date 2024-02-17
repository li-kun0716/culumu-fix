import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';

import React from 'react';
import { extractStyle } from '@ant-design/static-style-extract';

import { ThemeProvider } from '@/theme';

export type DoExtraStyleOptions = {
  dir?: string;
  baseFileName?: string;
};

export function doExtraStyle({ dir = 'public/antd-output/css', baseFileName = 'antd.min' }: DoExtraStyleOptions) {
  const baseDir = path.resolve(__dirname, '../../');
  const outputCssPath = path.join(baseDir, dir);

  if (!fs.existsSync(outputCssPath)) {
    fs.mkdirSync(outputCssPath, { recursive: true });
  }

  const css = extractStyle((node) => <ThemeProvider>{node}</ThemeProvider>);

  const md5 = createHash('md5');
  const hash = md5.update(css).digest('hex');
  const fileName = `${baseFileName}.${hash.substring(0, 8)}.css`;
  const fullPath = path.join(outputCssPath, fileName);

  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, css);
  }

  return fullPath;
}

doExtraStyle({});
