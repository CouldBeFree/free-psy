import { createSlice } from "@reduxjs/toolkit";
import { FailureAction } from "../types/actions/failureAction";
import { FetchUsersAction } from "../types/actions/fetchUsersAction";
import { GetUsersSuccessAction } from "../types/actions/getUsersSuccessAction";
import { SetUserAction } from "../types/actions/setUserAction";
import { CurrentUser } from "../types/currentUser";
import { UsersState } from "../types/state/usersState";

const initialState: UsersState = {
  users: null,
  isSubmitting: false,
  isLoading: true,
  validationBackendErrors: null,
  usersStatus: null
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
    },
    getUsersFailure: (state: UsersState, action: FailureAction): void => {
      state.isSubmitting = false;
      state.validationBackendErrors = action.payload;
    },
    setUsersStatus: (state: UsersState, action: SetUserAction): void => {
      state.usersStatus = action.payload;
    },
    clearState: (): UsersState => {
      return initialState; 
    }
  }
});

export default usersSlice.reducer;
export const { fetchUsers, getUsers, getUsersSuccess, getUsersFailure, clearState, setUsersStatus } = usersSlice.actions;