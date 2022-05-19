import { sagaEventCallBegan } from '../../saga';
import { setTag } from '../reducer';

export const setTagApi = (dispatch) => (payload) => {
  dispatch({
    payload: {
      url: `/api/tags`,
      method: 'post',
      onSuccess: setTag.type,
      payload,
    },
    type: sagaEventCallBegan.type,
  });
};
