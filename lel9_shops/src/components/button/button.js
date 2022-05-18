import { Button as ButtonAntd } from 'antd';
import clsx from 'clsx';
import React, { memo } from 'react';
import './styles.scss';

export const Button = memo(({ children, ...rest }) => {
  const classes = clsx('button');
  return (
    <ButtonAntd className={classes} {...rest}>
      {children}
    </ButtonAntd>
  );
});
