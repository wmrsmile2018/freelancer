import clsx from 'clsx';
import { memo } from 'react';
import { Input } from '../../../components/input';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';
import { Title } from '../../../components/title';

import './styles.scss';

export const AuthenticationView = memo(({ onChange, onPressEnter }) => {
  const classes = clsx('authentication');
  return (
    <MarginGroup className={classes} isColumn>
      <Title title='Авторизация' />
      <Input
        allowClear
        name='userId'
        onChange={onChange}
        onPressEnter={onPressEnter}
        gap={10}
      />
    </MarginGroup>
  );
});
