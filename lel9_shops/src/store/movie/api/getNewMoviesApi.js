import { sagaEventCallBegan } from '../../saga';
import { getNewMovies } from '../reducer';

export const getNewMoviesApi = (dispatch) => () => {
  dispatch({
    payload: {
      url: `/api/movies/new`,
      method: 'get',
      onSuccess: getNewMovies.type,
    },
    type: sagaEventCallBegan.type,
  });
};
