import { memo, useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useMovie } from '../../store/movie/api';
import { MovieView } from './view/movieView';

export const Movie = memo(() => {
  const {
    getRatings,
    getTags,
    getMovieById,
    setRating: setRatingApi,
    setTag: setTagApi,
  } = useMovie();
  const [rating, setRating] = useState(0);
  const [tag, setTag] = useState(0);
  const movie = useSelector((state) => state.movie.movie);
  const tags = useSelector((state) => state.movie.tags);
  const movieRating = useSelector((state) => state.movie.ratings[0]);
  const addTagReq = useSelector((state) => state.movie.tag.status);
  const addRatingReq = useSelector((state) => state.movie.rating.status);

  const [params] = useSearchParams();
  const userId = params.get('userId');
  const movieId = params.get('movieId');

  useEffect(() => {
    console.log('hello');
  }, []);

  useEffect(() => {
    getMovieById(movieId);
    getRatings(userId, movieId);
    getTags(userId, movieId);
  }, [userId, movieId, getMovieById, getRatings, getTags]);

  useEffect(() => {
    addTagReq && getTags(userId, movieId);
    addRatingReq && getRatings(userId, movieId);
  }, [addTagReq, addRatingReq, getTags, userId, movieId, getRatings]);

  const handleOnChangeRating = useCallback((value) => {
    setRating(value);
  }, []);

  const handleOnAddRating = useCallback(() => {
    setRatingApi({
      rating,
      userId,
      movieId,
      timestamp: new Date().getTime() / 1000,
    });
  }, [setRatingApi, rating, userId, movieId]);

  const handleOnAddTag = useCallback(() => {
    setTagApi({
      tag,
      userId,
      movieId,
      timestamp: new Date().getTime() / 1000,
    });
  }, [setTagApi, tag, userId, movieId]);

  const handleOnChangeTag = useCallback(({ target }) => {
    setTag(target.value);
  }, []);

  return (
    <MovieView
      tag={tag}
      tags={tags}
      movie={movie}
      onAddTag={handleOnAddTag}
      movieRating={movieRating?.rating || 0}
      onAddRating={handleOnAddRating}
      onChangeTag={handleOnChangeTag}
      onChangeRating={handleOnChangeRating}
    />
  );
});
