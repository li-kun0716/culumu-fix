import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';

import { withTheme } from '@/theme';

export const Input: React.FC<AntdInputProps> = (props) => {
  const CustomInput = withTheme(AntdInput, {
    components: { Input: { paddingBlockLG: 9 } }
  });

  return <CustomInput {...props} />;
};
