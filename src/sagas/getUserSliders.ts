import { call, put, takeEvery } from "@redux-saga/core/effects";
import { fetchUserSliders, getUserSliders, getUserSlidersSuccess, getUserSlidersFailure } from "../redux/sliderSlice";
import { usersApi } from "../services/requestService";
import { CurrentUser } from "../types/currentUser";

function* fetchUserSlidersWorker() {
  try {
    yield put(getUserSliders())
    const userSliders: CurrentUser[] = yield call(usersApi.getUserSliders)
    yield put(getUserSlidersSuccess(userSliders))
  } catch (error) {
    console.dir(error)
    yield put(getUserSlidersFailure(error))
  }
}

export function* userSlidersWatcher(): Generator {
  yield takeEvery(fetchUserSliders.type, fetchUserSlidersWorker)
}