import clsx from 'clsx';
import { memo } from 'react';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';
import { Button } from '../../../components/button';
import './styles.scss';

export const HeaderView = memo(({ onClick, userId, onExit }) => {
  const classes = clsx('header');
  return (
    <MarginGroup className={classes}>
      <Button onClick={onClick}>На главную</Button>
      <div className='empty-place'></div>
      <MarginGroup>
        <p className='header-userid'>userId: {userId}</p>
        <Button onClick={onExit}>Выйти</Button>
      </MarginGroup>
    </MarginGroup>
  );
});
