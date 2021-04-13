import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { disableLoader, fetchAuthMe, setCurrentUser } from "../redux/authenticationSlice";
import { CurrentUser } from "../types/currentUser";

function* fetchAuthMeWorker() {
  try {
    const currentUser: CurrentUser = yield call(authApi.authMe);
    yield put(setCurrentUser(currentUser));
    yield put(disableLoader());
  } catch (error) {
    yield put(disableLoader());
  }
}

export function* authMeWatcher(): Generator {
  yield takeEvery(fetchAuthMe.type, fetchAuthMeWorker)
}