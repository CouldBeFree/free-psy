import { all } from "redux-saga/effects";
import { authMeWatcher } from "./authMeSaga";
import { loginWatcher } from "./loginSaga";
import { registerWatcher } from "./registerSaga";

export function* rootWatcher(): Generator {
  yield all([registerWatcher(), authMeWatcher(), loginWatcher()]);
}