import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../sagas";
import authenticationSlice from "./authenticationSlice";
import usersSlice from "./usersSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    users: usersSlice
  },
  middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: {ignoredActions: ["authentication/fetchSetPhoto"]} }), sagaMiddleware],
  devTools: true
});


sagaMiddleware.run(rootWatcher);