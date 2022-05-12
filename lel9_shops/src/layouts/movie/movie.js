import { memo, useEffect } from 'react';
import { useMovie } from '../../store/movie/api';
import { MovieView } from './view/movieView';

export const Movie = memo(() => {
  const { getMovies, getNewMovies, getMovieById } = useMovie();

  useEffect(() => {
    getMovies();
    getNewMovies();
    getMovieById(99);
  }, []);

  return <MovieView />;
});
