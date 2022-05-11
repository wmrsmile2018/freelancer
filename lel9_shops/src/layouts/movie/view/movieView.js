import clsx from 'clsx';
import { memo } from 'react';
import './styles.scss';

export const MovieView = memo(() => {
  const classnames = clsx('movie');
  return <div className={classnames}></div>;
});
