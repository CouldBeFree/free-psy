import { createSlice } from "@reduxjs/toolkit";
import { FailureAction } from "../types/actions/failureAction";
import { GetUserSlidersSuccessAction } from "../types/actions/getUserSlidersSuccessAction";
import { SliderState } from "../types/state/sliderState";

const initialState: SliderState = {
  users: null,
  isLoading: false,
  validationBackendErrors: null,
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    fetchUserSliders: (state: SliderState): void => { // eslint-disable-line
      // do nothing
    },
    getUserSliders: (state: SliderState): void => {
      state.isLoading = true;
    },
    getUserSlidersSuccess: (state: SliderState, action: GetUserSlidersSuccessAction): void => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUserSlidersFailure: (state: SliderState, action: FailureAction): void => {
      state.isLoading = false;
      state.validationBackendErrors = action.payload;
    }
  }
});

export default sliderSlice.reducer;
export const { fetchUserSliders, getUserSliders, getUserSlidersSuccess, getUserSlidersFailure } = sliderSlice.actions;