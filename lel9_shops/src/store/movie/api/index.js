import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { getMovieByIdApi } from './getMovieByIdApi';
import { getMoviesApi } from './getMoviesApi';
import { getNewMoviesApi } from './getNewMoviesApi';
import { getRatingsApi } from './getRatingsApi';
import { getTagsApi } from './getTagsApi';

const getMovieApi = () => {
  return () => {
    const dispatch = useDispatch();
    return useMemo(() => {
      return {
        getMovieById: getMovieByIdApi(dispatch),
        getMovies: getMoviesApi(dispatch),
        getNewMovies: getNewMoviesApi(dispatch),
        getRatings: getRatingsApi(dispatch),
        getTags: getTagsApi(dispatch),
      };
    }, [dispatch]);
  };
};

export const useMovie = getMovieApi();
