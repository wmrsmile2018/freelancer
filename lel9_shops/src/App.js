import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Movie } from './layouts/movie';
import { Movies } from './layouts/movies';
import { Authentication } from './layouts/authentication';
import { Header } from './layouts/header';
import { Footer } from './layouts/footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const navigation = useNavigate();
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    !userId && navigation('/');
  }, [userId]);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='im' element={<Movies />} />
        <Route path='im/movie' element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
