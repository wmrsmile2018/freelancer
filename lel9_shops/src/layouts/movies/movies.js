import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMovie } from '../../store/movie/api';
import { MoviesView } from './view/moviesView';

export const DEFAULT_PAGE_SIZE = 20;

export const Movies = memo(() => {
  const navigate = useNavigate();
  const { getMovies, getNewMovies } = useMovie();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [isAll, dispatch] = useReducer((state) => !state, true);
  const movies = useSelector((state) => state.movie.movies);
  const newMovies = useSelector((state) => state.movie.newMovies);
  const userId = useSelector((state) => state.user.userId);

  const title = isAll ? 'все' : 'новые';
  const length = isAll ? movies.length : newMovies.length;

  useEffect(() => {
    getMovies();
    getNewMovies();
  }, []);

  const handleOnClickMovie = useCallback(
    (movieId) => {
      return () => {
        navigate(`/movie?userId=${userId}&movieId=${movieId}`);
      };
    },
    [userId, navigate]
  );

  const handleOnClickPagination = useCallback((page, pageSize) => {
    setPageSize(pageSize);
    setPage(page);
  }, []);

  const pagMovies = useMemo(() => {
    const tmpMovies = isAll ? movies : newMovies;
    return tmpMovies.slice((page - 1) * pageSize, page * pageSize);
  }, [page, movies, newMovies, isAll, pageSize]);

  return (
    <MoviesView
      movies={pagMovies}
      title={title}
      onSwitch={dispatch}
      onChange={handleOnClickPagination}
      maxLength={length}
      onClickMovie={handleOnClickMovie}
    />
  );
});
