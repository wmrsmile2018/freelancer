import { sagaEventCallBegan } from '../../saga';
import { updateRankByTop } from '../reducer';

export const updateRankByTopApi = (dispatch) => (payload) => {
  dispatch({
    payload: {
      url: `/api/nft_status/updateRankByTop`,
      method: 'post',
      onSuccess: updateRankByTop.type,
      payload,
    },
    type: sagaEventCallBegan.type,
  });
};
