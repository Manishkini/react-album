import { createSlice } from '@reduxjs/toolkit';

const albumSlicer = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
  },
  reducers: {
    getAllAlbums: (state, action) => {
      state.albums = [...state.albums, ...action.payload];
    },
    createAlbum: (state, { payload }) => {
      state.albums.push(payload);
    },
    updateAlbum: (state, { payload: { id, title } }) => {
      const albumIndex = state.albums.findIndex((obj) => obj.id === id);
      state.albums[albumIndex].title = title;
    },
    deleteAlbum: (state, { payload: id }) => {
      const filterdAlbums = state.albums.filter((obj) => obj.id !== id);
      state.albums = filterdAlbums;
    },
  },
});

export const { getAllAlbums, createAlbum, updateAlbum, deleteAlbum } =
  albumSlicer.actions;
export default albumSlicer.reducer;
