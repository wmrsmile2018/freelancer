import { sagaEventCallBegan } from '../../saga';
import { getMovieById } from '../reducer';

export const getMovieByIdApi = (dispatch) => (id) => {
  dispatch({
    payload: {
      url: `/api/movies/${id}`,
      method: 'get',
      onSuccess: getMovieById.type,
    },
    type: sagaEventCallBegan.type,
  });
};
