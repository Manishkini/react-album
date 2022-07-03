import { createSlice } from '@reduxjs/toolkit';

const albumSlicer = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
  },
  reducers: {
    getAllAlbums: (state, action) => {
      state.albums = action.payload;
    },
    createAlbum: (state, action) => {},
    updateAlbum: (state, action) => {},
    deleteAlbum: (state, action) => {},
  },
});

export const { getAllAlbums, createAlbum, updateAlbum, deleteAlbum } =
  albumSlicer.actions;
export default albumSlicer.reducer;
