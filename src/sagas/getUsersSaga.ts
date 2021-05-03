import { put, takeEvery, call } from "redux-saga/effects";
import { usersApi } from "../services/requestService";
import { CurrentUser } from "../types/currentUser";
import { fetchUsers, getUsers, getUsersFailure, getUsersSuccess } from "../redux/usersSlice";
import { FetchUsersAction } from "../types/actions/fetchUsersAction";
import { setCurrentRespondent } from "../redux/respondentSlice";

function* fetchUsersWorker({payload}: FetchUsersAction) {
  try {
    yield put(getUsers());
    const users: CurrentUser[] = yield call(usersApi.getUsers, payload);
    yield put(getUsersSuccess(users));
    yield users[0] && put(setCurrentRespondent(users[0]));
  } catch (error) {
    yield put(getUsersFailure("щось пішло не так"));
  }
}

export function* getUsersWatcher(): Generator {
  yield takeEvery(fetchUsers.type, fetchUsersWorker)
}