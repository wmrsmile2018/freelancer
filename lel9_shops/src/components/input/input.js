import clsx from 'clsx';
import { memo } from 'react';
import { MarginGroup } from '../marginGroup/marginGroup';
import { Input as InputAntd } from 'antd';

import './styles.scss';

export const Input = memo(({ name, isColumn, gap, ...rest }) => {
  const classes = clsx('input');
  return (
    <MarginGroup classes={classes} isColumn={isColumn} gap={gap}>
      <p>{name}</p>
      <InputAntd {...rest} />
    </MarginGroup>
  );
});
