import clsx from 'clsx';
import { memo } from 'react';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';

import './styles.scss';

export const HeaderView = memo(() => {
  const classes = clsx('header');
  return <MarginGroup className={classes} isColumn></MarginGroup>;
});
