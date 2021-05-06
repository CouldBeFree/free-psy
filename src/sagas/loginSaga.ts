import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchLogin, login, loginFailure, loginSuccess, setCurrentUser } from "../redux/authenticationSlice";
import { FetchLoginAction } from "../types/actions/fetchLoginAction";
import { CurrentUser } from "../types/currentUser";
import { persistanceService } from "../services/persistenceService";

function* fetchLoginWorker({payload}: FetchLoginAction) {
  try {
    yield put(login());
    const token: string = yield call(authApi.login, payload.email, payload.password);
    yield call(persistanceService.set, "psy-free-token", token);
    const currentUser: CurrentUser = yield call(authApi.authMe);
    yield put(setCurrentUser(currentUser));
    yield put(loginSuccess());
  } catch (error) {
    const errorMessage = "Логін чи пароль введені невірно";
    yield put(loginFailure(errorMessage));
  }
}

export function* loginWatcher(): Generator {
  yield takeEvery(fetchLogin.type, fetchLoginWorker)
}