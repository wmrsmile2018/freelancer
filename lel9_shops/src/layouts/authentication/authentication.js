import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../store/user/reducer';
import { getStorage } from '../../utils';
import { AuthenticationView } from './view/authenticationView';

export const Authentication = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  const handleOnChange = useCallback(({ target }) => {
    setUserId(target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    setUserId('');
    dispatch(auth({ userId }));
    navigate('/movies');
  }, [userId]);

  useEffect(() => {
    const { userId } = getStorage();
    if (userId) {
      dispatch(auth({ userId }));
      navigate('/movies');
    }
  }, []);

  return (
    <AuthenticationView
      onPressEnter={handleOnSubmit}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      isButtonDisalbed={userId === ''}
    />
  );
});
