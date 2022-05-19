import { memo, useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useMovie } from '../../store/movie/api';
import { MovieView } from './view/movieView';

export const Movie = memo(() => {
  const { getRatings, getTags, getMovieById } = useMovie();
  const [rating, setRating] = useState(0);
  const [tag, setTag] = useState(0);
  const movie = useSelector((state) => state.movie.movie);
  const tags = useSelector((state) => state.movie.tags);
  const movieRating = useSelector((state) => state.movie.ratings[0]);
  const [params] = useSearchParams();

  useEffect(() => {
    const userId = params.get('userId');
    const movieId = params.get('movieId');
    getMovieById(movieId);
    getRatings(userId, movieId);
    getTags(userId, movieId);
  }, [params]);

  useEffect(() => {
    // console.log(rating, tags);
  }, [tags, rating]);

  const handleOnChangeRating = useCallback((value) => {
    setRating(value);
  }, []);

  const handleOnAddRating = useCallback(() => {
    console.log(rating);
  }, [rating]);

  const handleOnAddTag = useCallback(() => {
    console.log(tag);
  }, [tag]);

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
