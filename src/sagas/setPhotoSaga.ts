import { put, takeEvery, call } from "redux-saga/effects";
import {  profileApi } from "../services/requestService";
import { fetchSetPhoto, setPhoto, setPhotoFailure, setPhotoSuccess } from "../redux/authenticationSlice";
import { FetchSetPhotoAction } from "../types/actions/fetchSetPhotoAction";
import { CurrentUser } from "../types/currentUser";

function* fetchSetPhotoWorker({payload: { file, id }}: FetchSetPhotoAction) {
  try {
    yield put(setPhoto());
    const currentUser: CurrentUser = yield call(profileApi.setPhoto, file, id);
    yield put(setPhotoSuccess(currentUser));
  } catch (error) {
    yield put(setPhotoFailure("щось пішло не так"));
  }
}

export function* setPhotoWatcher(): Generator {
  yield takeEvery(fetchSetPhoto.type, fetchSetPhotoWorker)
}