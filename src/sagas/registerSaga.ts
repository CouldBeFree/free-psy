import { put, takeEvery, call } from "redux-saga/effects";
import { authApi } from "../services/requestService";
import { fetchRegister, register, registerFailure, registerSuccess, setCurrentUser } from "../redux/authenticationSlice";
import { FetchRegisterAction } from "../types/actions/fetchRegisterAction";
import { CurrentUser } from "../types/currentUser";
import { persistanceService } from "../services/persistenceService";

function* fetchRegisterWorker({payload}: FetchRegisterAction) {
  try {
    yield put(register());
    // If it is Psychologist return full name, else return nickname
    const userName =  payload.isPsychologist ? `${payload.lastName} ${payload.firstName}` : `${payload.nickName}`;
    const userType =  payload.isPsychologist ? "psychologist" : "user";
    const token: string = yield call(authApi.register, userName, payload.password, payload.email, userType);
    yield call(persistanceService.set, "psy-free-token", token);
    const currentUser: CurrentUser = yield call(authApi.authMe);
    yield put(setCurrentUser(currentUser));
    yield put(registerSuccess());
  } catch (error) {
    let errorMessage: string = error.response.data.message;
    console.dir(error)
    // translate errors to ukrainian
    if (errorMessage) {
      if (errorMessage.includes("User with email")) { // "User with this email is already exists"
        errorMessage = "Користувач з цією електронною поштою вже зареєстровний";
      } else if (errorMessage.includes("User with name")) {
        errorMessage = "Користувач з цим псевдонімом вже зареєстровний";
      } else {
        errorMessage = "Щось пішло не так, зверніться в техпідтримку";
      }
    }
    yield put(registerFailure(errorMessage));
  }
}

export function* registerWatcher(): Generator {
  yield takeEvery(fetchRegister.type, fetchRegisterWorker)
}