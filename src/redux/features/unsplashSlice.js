import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedPhotos: JSON.parse(localStorage.getItem("likedPhotos")) || [],
  theme: "light",
  user: null,
};

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState,
  reducers: {
    addLikedPhoto: (state, { payload }) => {
      const isImageAlreadyLiked = state.likedPhotos.some(
        (image) => image.id === payload.id
      );

      if (!isImageAlreadyLiked) {
        state.likedPhotos = [...state.likedPhotos, payload];
        localStorage.setItem("likedPhotos", JSON.stringify(state.likedPhotos));
      }
    },
    removeLikedPhoto: (state, { payload }) => {
      state.likedPhotos = state.likedPhotos.filter(
        (image) => image.id !== payload.id
      );
    },
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addLikedPhoto, removeLikedPhoto, addUser, removeUser } =
  unsplashSlice.actions;
export default unsplashSlice.reducer;
