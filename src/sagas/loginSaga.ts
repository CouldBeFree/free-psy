import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchLogin, login, loginFailure, loginSuccess, setCurrentUser } from "../redux/authenticationSlice";
import { AxiosResponse } from "axios";
import { FetchLoginAction } from "../types/actions/fetchLoginAction";

function* fetchLoginWorker({payload}: FetchLoginAction) {
  try {
    yield put(login());
    yield call(authApi.login, payload.email, payload.password);
    const response: AxiosResponse = yield call(authApi.authMe);
    yield put(setCurrentUser(response.data.data));
    yield put(loginSuccess());
  } catch (error) {
    const errorMessage = "Логін чи пароль введені невірно";
    yield put(loginFailure(errorMessage));
  }
}

export function* loginWatcher(): Generator {
  yield takeEvery(fetchLogin.type, fetchLoginWorker)
}