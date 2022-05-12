import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../store/user/reducer';
import { AuthenticationView } from './view/authenticationView';

export const Authentication = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      auth({
        userId: 'hello',
      })
    );
  }, []);
  return <AuthenticationView />;
});
