import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    photo: null,
    error: null
  },
  reducers: {
    fetchSetPhoto: (state: any, action: any): void => { // eslint-disable-line
      // do nothing
    },
    setPhoto: (state: any): void => {
      state.isLoading = true;
    },
    setPhotoSuccess: (state: any): void => {
      state.isLoading = false;
    },
    setPhotoFailure: (state: any, action: any): void => {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
});

export default profileSlice.reducer;
export const { fetchSetPhoto, setPhoto, setPhotoSuccess, setPhotoFailure } = profileSlice.actions;