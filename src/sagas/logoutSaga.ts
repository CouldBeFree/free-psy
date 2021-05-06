import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchLogout, logout, logoutFailure, logoutSuccess } from "../redux/authenticationSlice";
import { persistanceService } from "../services/persistenceService";

function* fetchLogoutWorker() {
  try {
    yield put(logout());
    yield call(persistanceService.delete, "psy-free-token");
    yield call(authApi.logout);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure());
  }
}

export function* logoutWatcher(): Generator {
  yield takeEvery(fetchLogout.type, fetchLogoutWorker)
}