import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationStateInterface } from "../types/authenticationState";
import { FetchRegisterActionInterface } from "../types/fetchRegisterAction";
import { SetCurrentUserActionInterface } from "../types/setCurrentUserAction";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: null,
    currentUser: null,
    isSubmitting: false,
    validationErrors: null
  },
  reducers: {
    fetchRegister: (state: AuthenticationStateInterface, action: FetchRegisterActionInterface): void => { // eslint-disable-line
      // do nothing
    },
    register: (state: AuthenticationStateInterface): void => {
      state.isSubmitting = true;
    },
    registerSuccess: (state: AuthenticationStateInterface): void => {
      state.isSubmitting = false;
      state.isAuthenticated = true;
    },
    registerFailure: (state: AuthenticationStateInterface): void => {
      state.isSubmitting = false;
      state.isAuthenticated = false;
    },
    fetchLogin: (state: AuthenticationStateInterface, action: FetchRegisterActionInterface): void => { // eslint-disable-line
      // do nothing
    },
    login: (state: AuthenticationStateInterface): void => {
      state.isSubmitting = true;
    },
    loginSuccess: (state: AuthenticationStateInterface): void => {
      state.isSubmitting = false;
    },
    loginFailure: (state: AuthenticationStateInterface): void => {
      state.isSubmitting = false;
    },
    fetchAuthMe: (): void => { // eslint-disable-line
      // do nothing
    },
    setCurrentUser (state: AuthenticationStateInterface, action: SetCurrentUserActionInterface ): void {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    }
  }
});

export default authenticationSlice.reducer;
export const { fetchRegister, register, registerSuccess, registerFailure,
  fetchLogin, login, loginSuccess, loginFailure, fetchAuthMe, setCurrentUser } = authenticationSlice.actions;