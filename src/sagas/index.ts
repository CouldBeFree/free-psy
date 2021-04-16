import { all } from "redux-saga/effects";
import { authMeWatcher } from "./authMeSaga";
import { loginWatcher } from "./loginSaga";
import { logoutWatcher } from "./logoutSaga";
import { registerWatcher } from "./registerSaga";
import { setInfoWatcher } from "./setInfoSaga";
import { setPhotoWatcher } from "./setPhotoSaga";

export function* rootWatcher(): Generator {
  yield all([registerWatcher(), authMeWatcher(), loginWatcher(), logoutWatcher(), setPhotoWatcher(), setInfoWatcher()]);
}