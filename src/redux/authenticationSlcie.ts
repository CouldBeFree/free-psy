import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../types/authenticationState";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isSubmitting: false,
    isAuthenticated: false,
  },
  reducers: {
    fetchRegister: (): void => { },
    register: (state: AuthenticationState): void => {
      state.isSubmitting = true;
    },
    registerSuccess: (state: AuthenticationState): void => {
      state.isSubmitting = false;
    },
    registerFailure: (state: AuthenticationState): void => {
      state.isSubmitting = false;
    }
  }
});

export default authenticationSlice.reducer
export const { fetchRegister, register, registerSuccess, registerFailure } = authenticationSlice.actions