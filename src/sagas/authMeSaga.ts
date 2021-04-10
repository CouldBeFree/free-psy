import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { disableLoader, fetchAuthMe, setCurrentUser } from "../redux/authenticationSlice";
import { AxiosResponse } from "axios";

function* fetchAuthMeWorker() {
  try {
    const response: AxiosResponse = yield call(authApi.authMe);
    yield put(setCurrentUser(response.data.data));
    yield put(disableLoader());
  } catch (error) {
    yield put(disableLoader());
  }
}

export function* authMeWatcher(): Generator {
  yield takeEvery(fetchAuthMe.type, fetchAuthMeWorker)
}