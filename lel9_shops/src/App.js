import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Movie } from './layouts/movie';
import { Movies } from './layouts/movies';
import { Authentication } from './layouts/authentication';
import { Header } from './layouts/header';
import { Footer } from './layouts/footer';
import { memo, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage } from './utils';
import { auth } from './store/user/reducer';

const Content = memo(() => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Movies />} />
          <Route path='im/movie' element={<Movie />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
});

function App() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  useLayoutEffect(() => {
    !userId && navigation('/');
  }, [navigation, userId]);

  useEffect(() => {
    const { userId } = getStorage();
    if (userId) {
      dispatch(auth({ userId }));
    }
  }, [dispatch, navigation]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='im' element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
