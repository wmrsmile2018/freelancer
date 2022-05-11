import clsx from 'clsx';
import { memo } from 'react';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';

import './styles.scss';

export const FooterView = memo(() => {
  const classes = clsx('footer');
  return <MarginGroup className={classes} isColumn></MarginGroup>;
});
