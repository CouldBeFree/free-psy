import { all } from "redux-saga/effects";
import { registerWatcher } from "./authenticationSaga";

export function* rootWatcher() {
  yield all([registerWatcher()]);
}