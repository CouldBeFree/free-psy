import { put, takeEvery, call } from "redux-saga/effects";
import { usersApi } from "../services/requestService";
import { FetchUsersAction } from "../types/actions/fetchUsersAction";
import { fetchMessages, getMessages, getMessagesFailure, getMessagesSuccess } from "../redux/respondentSlice";
import { MessageInterface } from "../types/messageInterface";

function* fetchMessagesWorker({payload}: FetchUsersAction) {
  try {
    yield put(getMessages());
    const messages: MessageInterface[] = yield call(usersApi.getMessages, payload);
    yield put(getMessagesSuccess(messages));
  } catch (error) {
    yield put(getMessagesFailure("щось пішло не так"));
  }
}

export function* getMessagesWatcher(): Generator {
  yield takeEvery(fetchMessages.type, fetchMessagesWorker)
}