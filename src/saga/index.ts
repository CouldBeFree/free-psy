import { all } from "redux-saga/effects";
import { authMeWatcher } from "./authMeSaga";
import { registerWatcher } from "./registerSaga";

export function* rootWatcher(): Generator {
  yield all([registerWatcher(), authMeWatcher()]);
}