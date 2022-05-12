import { sagaEventCallBegan } from '../../saga';
import { getMovies } from '../reducer';

export const getMoviesApi = (dispatch) => () => {
  dispatch({
    payload: {
      url: `/api/movies`,
      method: 'get',
      onSuccess: getMovies.type,
    },
    type: sagaEventCallBegan.type,
  });
};
