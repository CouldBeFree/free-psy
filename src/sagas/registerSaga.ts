import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchRegister, register, registerFailure, registerSuccess, setCurrentUser } from "../redux/authenticationSlcie";
import { AxiosResponse } from "axios";
import { FetchRegisterAction } from "../types/actions/fetchRegisterAction";

function* fetchRegisterWorker({payload}: FetchRegisterAction) {
  try {
    yield put(register())
    // If it is Psychologist return full name, else return nickname
    const userName =  payload.isPsychologist ? `${payload.lastName} ${payload.firstName}` : `${payload.nickName}`;
    const userType =  payload.isPsychologist ? "psychologist" : "психолог";
    yield call(authApi.register, userName, payload.password, payload.email, userType);
    const response: AxiosResponse = yield call(authApi.authMe);
    yield put(setCurrentUser(response.data.data));
    yield put(registerSuccess());
  } catch (error) {
    const errorMessage: string = error.response.data.toString().split("Error: ")[1].split("<br>")[0];
    yield put(registerFailure(errorMessage));
  }
}

export function* registerWatcher(): Generator {
  yield takeEvery(fetchRegister.type, fetchRegisterWorker)
}