import { combineReducers } from 'redux';

import nft from './movies/reducer';
import user from './user/reducer';

const appReducer = combineReducers({ nft, user });

export function rootReducer(state, action) {
  if (action.type === 'CLEAR_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
}
