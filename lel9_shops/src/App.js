import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Movie } from './layouts/movie';
import { Movies } from './layouts/movies';
import { Authentication } from './layouts/authentication';
import { Header } from './layouts/header';
import { Footer } from './layouts/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='movie' element={<Movie />} />
        <Route path='movies' element={<Movies />} />
        <Route path='sign-in' element={<Authentication />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
