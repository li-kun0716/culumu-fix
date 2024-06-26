import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

import { withTheme } from '@/theme';
import colors from '@/theme/colors';

type ButtonProps = Omit<AntdButtonProps, 'type'> & { type?: AntdButtonProps['type'] | 'outline' };

export const Button: React.FC<ButtonProps> = (props) => {
  const { type, ...rest } = props;

  if (type === 'outline') {
    const CustomButton = withTheme(AntdButton, {
      components: { Button: { defaultBorderColor: colors.accent['800'], defaultColor: colors.accent['800'] } }
    });
    return <CustomButton type="default" {...rest} />;
  }

  return <AntdButton type={type as AntdButtonProps['type']} {...rest} />;
};
