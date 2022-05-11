import { memo } from 'react';
import { MoviesView } from './view/moviesView';

export const Movies = memo(() => {
  return <MoviesView />;
});
