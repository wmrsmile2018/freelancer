import { sagaEventCallBegan } from '../../saga';
import { getTags } from '../reducer';

export const getTagsApi = (dispatch) => (userId, movieId) => {
  dispatch({
    payload: {
      url: `/api/tags?userId=${userId}&movieId=${movieId}`,
      method: 'get',
      onSuccess: getTags.type,
    },
    type: sagaEventCallBegan.type,
  });
};
