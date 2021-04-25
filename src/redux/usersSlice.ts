import { createSlice } from "@reduxjs/toolkit";
import { FailureAction } from "../types/actions/failureAction";
import { FetchUsersAction } from "../types/actions/fetchUsersAction";
import { GetUsersSuccessAction } from "../types/actions/getUsersSuccessAction";
import { SetCurrentRespondentAction } from "../types/actions/setCurrentRespondentAction";
import { UsersState } from "../types/state/usersState";

const initialState = {
  users: null,
  currentRespondent: null,
  isSubmitting: false,
  isLoading: true,
  validationBackendErrors: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state: UsersState, action: FetchUsersAction): void => { // eslint-disable-line
      // do nothing
    },
    getUsers: (state: UsersState): void => {
      state.isLoading = true;
    },
    getUsersSuccess: (state: UsersState, action: GetUsersSuccessAction): void => {
      state.isLoading = false;
      state.validationBackendErrors = null;
      state.users = action.payload;
      state.currentRespondent = action.payload[0];
    },
    getUsersFailure: (state: UsersState, action: FailureAction): void => {
      state.isSubmitting = false;
      state.validationBackendErrors = action.payload;
    },
    setCurrentRespondent: (state: UsersState, action: SetCurrentRespondentAction): void => {
      state.currentRespondent = action.payload;
    },
    clearState: (state: UsersState): void => {
      state = initialState;
    }
  }
});

export default usersSlice.reducer;
export const { fetchUsers, getUsers, getUsersSuccess, getUsersFailure, clearState, setCurrentRespondent } = usersSlice.actions;