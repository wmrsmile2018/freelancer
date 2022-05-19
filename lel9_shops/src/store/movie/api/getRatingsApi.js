import { sagaEventCallBegan } from '../../saga';
import { getRatings } from '../reducer';

export const getRatingsApi = (dispatch) => (userId, movieId) => {
  dispatch({
    payload: {
      url: `/api/ratings?userId=${userId}&movieId=${movieId}`,
      method: 'get',
      onSuccess: getRatings.type,
    },
    type: sagaEventCallBegan.type,
  });
};
