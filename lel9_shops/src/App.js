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
    <div className='content'>
      <Header />
      <Routes>
        <Route path='/'>
          <Route path='movie' element={<Movie />} />
          <Route index element={<Movies />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
});

const AnimatedBackgrond = () => {
  return (
    <div className='scrolling-image-container'>
      <div className='scrolling-image'></div>
    </div>
  );
};

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
      <AnimatedBackgrond />
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/im/*' element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
