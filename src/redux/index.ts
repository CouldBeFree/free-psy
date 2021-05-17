import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../sagas";
import authenticationSlice from "./authenticationSlice";
import respondentSlice from "./respondentSlice";
import sliderSlice from "./sliderSlice";
import usersSlice from "./usersSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    users: usersSlice,
    respondent: respondentSlice,
    slider: sliderSlice
  },
  middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: {ignoredActions: ["authentication/fetchSetPhoto"]} }), sagaMiddleware],
  devTools: true
});


sagaMiddleware.run(rootWatcher);