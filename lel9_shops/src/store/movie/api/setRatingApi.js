import { sagaEventCallBegan } from '../../saga';
import { setRating } from '../reducer';

export const setRatingApi = (dispatch) => (payload) => {
  dispatch({
    payload: {
      url: `/api/ratings`,
      method: 'post',
      onSuccess: setRating.type,
      payload,
    },
    type: sagaEventCallBegan.type,
  });
};
