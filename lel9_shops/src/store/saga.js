import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const envBaseUrl = process.env.REACT_APP_BASE_URL;

export const sagaEventCallBegan = createAction('saga/eventCallBegan');
export const sagaEventCallSuccess = createAction('saga/eventCallSuccess');
export const sagaEventCallFail = createAction('saga/eventCallFail');

const fetchApi = async ({ baseURL, url, method, data, token }) =>
  await axios.request({
    baseURL,
    url,
    method,
    data,
    headers: {
      authToken: token,
    },
  });

const getOptions = ({
  url,
  method,
  data = null,
  baseURL = envBaseUrl,
  token = '',
}) => ({
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
    const res = yield call(fetchApi, options);
    yield put({
      type: onSuccess,
      payload: res.data,
      rest,
    });
    yield put({ type: sagaEventCallSuccess.type });
  } catch (error) {
    console.log(error);
    // yield put({
    //   type: onError,
    //   payload: { data: error?.response?.data, status: error?.response?.status },
    // });
    yield put({ type: sagaEventCallFail.type });

    // if (error?.response?.status === 401) {
    // yield put({ type: "CLEAR_STORE" });
    // }
  }
}

function* watchEventSaga() {
  yield takeEvery(sagaEventCallBegan.type, requestExecutor);
}

export function* rootSaga() {
  yield fork(watchEventSaga);
}
