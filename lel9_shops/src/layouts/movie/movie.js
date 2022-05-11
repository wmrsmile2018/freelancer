import { memo } from 'react';
import { MovieView } from './view/movieView';

export const Movie = memo(() => {
  return <MovieView />;
});
