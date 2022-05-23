import { memo, useCallback, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../store/user/reducer';
import { AuthenticationView } from './view/authenticationView';

export const Authentication = memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [userId, setUserId] = useState('');
  const userIdFromStore = useSelector((state) => state.user.userId);

  useLayoutEffect(() => {
    userIdFromStore && navigation('/im');
  }, [navigation, userIdFromStore]);

  const handleOnChange = useCallback(({ target }) => {
    setUserId(target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    dispatch(auth({ userId }));
    navigation('/im');
  }, [dispatch, navigation, userId]);

  return (
    <AuthenticationView
      onPressEnter={handleOnSubmit}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      isButtonDisalbed={userId === ''}
    />
  );
});
