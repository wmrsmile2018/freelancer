import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { exit } from '../../store/user/reducer';
import { HeaderView } from './view/headerView';

export const Header = memo(() => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const navigation = useNavigate();

  const handleOnBack = useCallback(() => {
    // navigation('/movies');
  }, []);

  const handleOnExit = useCallback(() => {
    dispatch({ type: 'CLEAR_STORE' });
    dispatch(exit());
  }, []);

  return (
    <HeaderView userId={userId} onClick={handleOnBack} onExit={handleOnExit} />
  );
});
