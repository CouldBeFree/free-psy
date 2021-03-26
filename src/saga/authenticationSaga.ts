import { AxiosResponse } from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { registerAPI } from "../api/requests";
import { fetchRegister, register, registerFailure, registerSuccess } from "../redux/authenticationSlcie";


function* fetchRegisterWorker() {
  try {
    yield put(register());
    const response: AxiosResponse = yield call(registerAPI);
    yield console.log(response);
    yield put(registerSuccess());
  } catch (error) {
    console.log(error);
    yield put(registerFailure());
  }
}

export function* registerWatcher() {
  yield takeEvery(fetchRegister.type, fetchRegisterWorker)
}