import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { getMovieByIdApi } from './getMovieByIdApi';
import { getMoviesApi } from './getMoviesApi';
import { getNewMoviesApi } from './getNewMoviesApi';

const getMovieApi = () => {
  return () => {
    const dispatch = useDispatch();
    return useMemo(() => {
      return {
        getMovieById: getMovieByIdApi(dispatch),
        getMovies: getMoviesApi(dispatch),
        getNewMovies: getNewMoviesApi(dispatch),
      };
    }, [dispatch]);
  };
};

export const useMovie = getMovieApi();
