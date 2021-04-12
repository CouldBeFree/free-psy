import { put, takeEvery, call } from "redux-saga/effects";
import {  profileApi } from "../services/requestService";
import { fetchSetPhoto, setPhoto, setPhotoFailure, setPhotoSuccess } from "../redux/authenticationSlice";
import { FetchSetPhotoAction } from "../types/actions/fetchSetPhotoAction";

function* fetchSetPhotoWorker({payload: { file, id }}: FetchSetPhotoAction) {
  try {
    yield put(setPhoto());
    yield call(profileApi.setPhoto, file, id);
    yield put(setPhotoSuccess());
  } catch (error) {
    yield put(setPhotoFailure("щось пішло не так"));
  }
}

export function* setPhotoWatcher(): Generator {
  yield takeEvery(fetchSetPhoto.type, fetchSetPhotoWorker)
}