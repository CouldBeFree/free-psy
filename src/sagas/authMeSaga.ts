import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchAuthMe, setCurrentUser } from "../redux/authenticationSlcie";
import { AxiosResponse } from "axios";

function* fetchAuthMeWorker() {
  try {
    const response: AxiosResponse = yield call(authApi.authMe);
    yield put(setCurrentUser(response.data.data));
  } catch (error) {
    console.error(error);
  }
}

export function* authMeWatcher(): Generator {
  yield takeEvery(fetchAuthMe.type, fetchAuthMeWorker)
}