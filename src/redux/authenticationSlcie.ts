import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../types/state/authenticationState";
import { FetchRegisterAction } from "../types/actions/fetchRegisterAction";
import { SetCurrentUserAction } from "../types/actions/setCurrentUserAction";
import { RegisterFailureAction } from "../types/actions/registerFailureAction";
import { FetchLoginAction } from "../types/actions/fetchLoginAction";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: null,
    currentUser: null,
    isSubmitting: false,
    validationBackendErrors: null
  },
  reducers: {
    fetchRegister: (state: AuthenticationState, action: FetchRegisterAction): void => { // eslint-disable-line
      // do nothing
    },
    register: (state: AuthenticationState): void => {
      state.isSubmitting = true;
    },
    registerSuccess: (state: AuthenticationState): void => {
      state.isSubmitting = false;
      state.isAuthenticated = true;
      state.validationBackendErrors = null;
    },
    registerFailure: (state: AuthenticationState, action: RegisterFailureAction): void => {
      state.isSubmitting = false;
      state.isAuthenticated = false;
      state.validationBackendErrors = action.payload;
    },
    clearBackendErrors: (state: AuthenticationState): void => {
      state.validationBackendErrors = null;
    },
    fetchLogin: (state: AuthenticationState, action: FetchLoginAction): void => { // eslint-disable-line
      // do nothing
    },
    login: (state: AuthenticationState): void => {
      state.isSubmitting = true;
    },
    loginSuccess: (state: AuthenticationState): void => {
      state.isSubmitting = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state: AuthenticationState): void => {
      state.isSubmitting = false;
      state.isAuthenticated = false;
    },
    fetchAuthMe: (): void => { // eslint-disable-line
      // do nothing
    },
    setCurrentUser (state: AuthenticationState, action: SetCurrentUserAction ): void {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    }
  }
});

export default authenticationSlice.reducer;
export const { fetchRegister, register, registerSuccess, registerFailure,
  fetchLogin, login, loginSuccess, loginFailure, fetchAuthMe, setCurrentUser,
  clearBackendErrors } = authenticationSlice.actions;