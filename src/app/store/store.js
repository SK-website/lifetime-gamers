import { configureStore } from '@reduxjs/toolkit';
import playlistSlice from './reducers/playlist-reducer';
import paginationSlice from './reducers/pagination-reducer';

const store = configureStore({
  reducer: {
    playlist: playlistSlice,
    pagination: paginationSlice,
  },
});
export default store;

export const playlistState = (state) => state.playlist;
export const paginationState = (state) => state.pagination;
