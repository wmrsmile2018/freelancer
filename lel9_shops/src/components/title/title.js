import clsx from 'clsx';
import { memo } from 'react';
import './styles.scss';

export const Title = memo(({ title }) => {
  const classes = clsx('title');
  return <h2 className={classes}>{title}</h2>;
});
