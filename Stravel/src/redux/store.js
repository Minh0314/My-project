"use client";
import { configureStore } from "@reduxjs/toolkit";
import { preferentialSlice } from "./slice/preferentialSlice";
import { userSlice } from "./slice/userSlice";
import { logoSlice } from "./slice/logoSilce";
import { themeSlice } from "./slice/themeSlice";
import { loadingSlice } from "./slice/isLoading";
export const store = configureStore({
  reducer: {
    preferential: preferentialSlice.reducer,
    users: userSlice.reducer,
    logo: logoSlice.reducer,
    theme: themeSlice.reducer,
    loading: loadingSlice.reducer,
  },
});
