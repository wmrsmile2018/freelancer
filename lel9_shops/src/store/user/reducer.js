import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../../utils';
import {
  sagaEventCallBegan,
  sagaEventCallFail,
  sagaEventCallSuccess,
} from '../saga';

const initialState = {
  error: {},
  status: '',
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    auth: (state, action) => {
      console.log(action);
      setItem('userId', action.payload.userId);
      state.userId = action.payload.userId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sagaEventCallBegan, (state) => {});
    builder.addCase(sagaEventCallSuccess, (state) => {});
    builder.addCase(sagaEventCallFail, (state) => {});
  },
});

export default userSlice.reducer;

export const { auth } = userSlice.actions;
