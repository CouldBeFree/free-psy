import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchLogin, login, loginFailure, loginSuccess, setCurrentUser } from "../redux/authenticationSlcie";
import { AxiosResponse } from "axios";
import { FetchLoginAction } from "../types/actions/fetchLoginAction";

function* fetchLoginWorker({payload}: FetchLoginAction) {
  try {
    yield put(login());
    const response: AxiosResponse = yield call(authApi.login, payload.email, payload.password);
    yield put(setCurrentUser(response.data.data));
    yield put(loginSuccess());
  } catch (error) {
    console.dir(error);
    // const errorMessage: string = error.response.data.toString().split("Error: ")[1].split("<br>")[0];
    yield put(loginFailure());
  }
}

export function* loginWatcher(): Generator {
  yield takeEvery(fetchLogin.type, fetchLoginWorker)
}