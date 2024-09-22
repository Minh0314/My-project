import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  logo: [
    {
      id: 1,
      url: "https://code-fullstack-exercise49.vercel.app/images/1.jpg",
    },
    {
      id: 2,
      url: "https://code-fullstack-exercise49.vercel.app/images/2.jpg",
    },
    {
      id: 3,
      url: "https://code-fullstack-exercise49.vercel.app/images/3.jpg ",
    },
    {
      id: 4,
      url: "https://code-fullstack-exercise49.vercel.app/images/4.jpg",
    },
    {
      id: 5,
      url: "https://code-fullstack-exercise49.vercel.app/images/5.jpg",
    },
    {
      id: 6,
      url: "https://code-fullstack-exercise49.vercel.app/images/6.jpg",
    },
  ],
  video: [
    {
      id: 1,
      url: "https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4",
    },
    {
      id: 2,
      url: "https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4",
    },
    {
      id: 3,
      url: "https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4",
    },
  ],
};
export const logoSlice = createSlice({
  name: "logo",
  initialState,
  reducers: {},
});

export default logoSlice.reducer;
