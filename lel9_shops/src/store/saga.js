import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAccountStart } from './user/reducer';

export const sagaEventCallBegan = createAction('saga/eventCallBegan');
export const sagaEventCallSuccess = createAction('saga/eventCallSuccess');
export const sagaEventCallFail = createAction('saga/eventCallFail');

const envBaseUrl = process?.env?.REACT_APP_BASE_URL ?? '';

const fetchApi = async ({ baseURL, url, method, data, token }) => {
  return await axios.request({
    baseURL,
    url,
    method,
    data,
    // headers: {
    //     authToken: token,
    // },
  });
};

const getOptions = ({ url, method, data, baseURL, token }) => ({
  baseURL,
  url,
  method,
  data,
  token,
});

function* requestExecutor(action) {
  const { url, method, onSuccess, onError, payload, token, ...rest } =
    action.payload;
  const options = getOptions({
    baseURL: envBaseUrl,
    url,
    method,
    data: payload,
    token,
  });
  try {
    // @ts-ignore
    const res = yield call(fetchApi, options);
    yield put({
      type: onSuccess,
      payload: res.data,
      rest,
    });
    yield put({ type: sagaEventCallSuccess.type });
  } catch (error) {
    console.log(error);
    yield put({
      type: onError,
      // payload: { data: error?.response?.data, status: error?.response?.status },
    });
    yield put({ type: sagaEventCallFail.type });
    // yield put({ type: authorisationFailed.type, payload: error?.response?.status });
    // if (error?.response?.status === 401) {
    //     // yield put({ type: "CLEAR_STORE" });
    // }
  }
}

function* userExecutor(action) {
  const { account, onSuccess } = action.payload;

  yield put({
    type: onSuccess,
    payload: account,
  });
  // const options = getOptions({
  //     baseURL: envBaseUrl,
  //     url,
  //     method,
  //     data: payload,
  //     token,
  // });
  try {
    // @ts-ignore
    // const res: { data: Object } = yield call(fetchApi, options);
    // yield put({ type: sagaEventCallSuccess.type });
  } catch (error) {
    // console.log(error);
    // yield put({
    //     type: onError,
    //     // payload: { data: error?.response?.data, status: error?.response?.status },
    // });
    // yield put({ type: sagaEventCallFail.type });
    // // yield put({ type: authorisationFailed.type, payload: error?.response?.status });
    // // if (error?.response?.status === 401) {
    // //     // yield put({ type: "CLEAR_STORE" });
    // // }
  }
}

function* watchUserSaga() {
  yield takeEvery(setAccountStart.type, userExecutor);
}

function* watchNftSaga() {
  yield takeEvery(sagaEventCallBegan.type, requestExecutor);
}

export function* rootSaga() {
  yield all([fork(watchNftSaga), fork(watchUserSaga)]);
}
