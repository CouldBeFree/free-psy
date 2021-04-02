import { put, takeEvery, call, SagaReturnType } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchRegister, register, registerFailure, registerSuccess, setCurrentUser } from "../redux/authenticationSlcie";
import { FetchRegisterActionInterface } from "../types/fetchRegisterAction";
import { AxiosResponse } from "axios";

function* fetchRegisterWorker({payload}: FetchRegisterActionInterface) {
  try {
    yield put(register());
    // If it is Psycholog return full name, else return nickname
    const userName =  payload.isPsychologist ? `${payload.lastName} ${payload.firstName}` : `${payload.nickName}`;
    const userType =  payload.isPsychologist ? "psychologist" : "психолог";
    const status: SagaReturnType<typeof authApi.register> = yield call(authApi.register, userName, payload.password, payload.email, userType);
    if (status >= 200 && status < 300) {
      const response: AxiosResponse = yield call(authApi.authMe);
      yield put(setCurrentUser(response.data.data));
      yield put(registerSuccess());
    } else {
      yield put(registerFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(registerFailure());
  }
}

export function* registerWatcher(): Generator {
  yield takeEvery(fetchRegister.type, fetchRegisterWorker)
}