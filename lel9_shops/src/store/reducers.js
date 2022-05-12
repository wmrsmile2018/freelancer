import { combineReducers } from 'redux';

import movie from './movie/reducer';
import user from './user/reducer';

const appReducer = combineReducers({ movie, user });

export function rootReducer(state, action) {
  if (action.type === 'CLEAR_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
}
