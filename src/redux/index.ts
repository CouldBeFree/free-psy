import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";
import authenticationSlcie from "./authenticationSlcie";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authentication: authenticationSlcie
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  devTools: true
});


sagaMiddleware.run(rootWatcher);