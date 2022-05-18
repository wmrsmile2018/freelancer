import clsx from 'clsx';
import { memo } from 'react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';
import { Title } from '../../../components/title';
import logo from '../../../assets/logo.png';
import './styles.scss';

export const AuthenticationView = memo(
  ({ onChange, onPressEnter, onSubmit, isButtonDisalbed }) => {
    const classes = clsx('authentication');
    return (
      <MarginGroup className={classes}>
        <img src={logo} alt='logo' />
        <MarginGroup className={[`${classes}-form`]} isColumn>
          <Title title='Авторизация' />
          <Input
            allowClear
            name='UserId'
            onChange={onChange}
            onPressEnter={onPressEnter}
            gap={10}
          />
          <Button disabled={isButtonDisalbed} onClick={onSubmit}>
            Войти
          </Button>
        </MarginGroup>
      </MarginGroup>
    );
  }
);
