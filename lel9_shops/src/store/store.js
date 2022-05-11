import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { reduxBatch } from "@manaflair/redux-batch";

import {rootReducer, RootState, Store} from "./reducers";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    diff: true,
    level: "log",
    duration: true,
});
const middlewares = [sagaMiddleware];
const middleware = [...getDefaultMiddleware({ thunk: false }), ...middlewares];

const configureAppStore = (preloadedState: {[p: string]: any} | undefined) =>
    configureStore({
        // @ts-ignore
        reducer: rootReducer,
        enhancers: [reduxBatch],
        preloadedState,
        middleware,
        devTools: process.env.NODE_ENV === "development",
    });


const store = configureAppStore({});

sagaMiddleware.run(rootSaga);

export default store;