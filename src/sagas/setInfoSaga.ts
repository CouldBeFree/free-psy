import { put, takeEvery, call } from "redux-saga/effects";
import {  profileApi } from "../services/requestService";
import { fetchSetInfo, setInfo, setInfoFailure, setInfoSuccess } from "../redux/authenticationSlice";
import { FetchSetInfoAction } from "../types/actions/fetchSetInfoAction";
import { CurrentUser } from "../types/currentUser";

function* fetchSetInfoWorker({payload: {primaryInfo, id}}: FetchSetInfoAction) {
  try {
    yield put(setInfo());
    const currentUser: CurrentUser = yield call(profileApi.setInfo, primaryInfo, id);
    yield put(setInfoSuccess(currentUser));
  } catch (error) {
    yield put(setInfoFailure("щось пішло не так"));
  }
}

export function* setInfoWatcher(): Generator {
  yield takeEvery(fetchSetInfo.type, fetchSetInfoWorker)
}