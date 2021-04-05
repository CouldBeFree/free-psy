import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchLogout, logout, logoutFailure, logoutSuccess } from "../redux/authenticationSlcie";

function* fetchLogoutWorker() {
  try {
    yield put(logout());
    yield call(authApi.logout);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure());
  }
}

export function* logoutWatcher(): Generator {
  yield takeEvery(fetchLogout.type, fetchLogoutWorker)
}