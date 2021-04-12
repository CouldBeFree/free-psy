import { put, takeEvery, call } from "redux-saga/effects";
import {  profileApi } from "../services/requestService";
import { fetchSetPhoto, setPhoto, setPhotoFailure, setPhotoSuccess } from "../redux/profileSlice";

function* fetchSetPhotoWorker({payload}: any) {
  console.log(payload)
  try {
    yield put(setPhoto());
    yield call(profileApi.setPhoto, payload.file[0], payload.id);
    yield put(setPhotoSuccess());
  } catch (error) {
    // const errorMessage: string = error.response.data.message;
    // yield put(setPhotoFailure(errorMessage));
  }
}

export function* setPhotoWatcher(): Generator {
  yield takeEvery(fetchSetPhoto.type, fetchSetPhotoWorker)
}