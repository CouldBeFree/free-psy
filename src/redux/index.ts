import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../sagas";
import profileSlice from "./profileSlice";
import authenticationSlice from "./authenticationSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    profile: profileSlice
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  devTools: true
});


sagaMiddleware.run(rootWatcher);