import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
};
export const loadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});
export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
