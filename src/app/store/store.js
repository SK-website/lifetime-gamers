import { configureStore } from '@reduxjs/toolkit';
import playlistSlice from './reducers/playlist-reducer';

const store = configureStore({
  reducer: {
    playlist: playlistSlice,
  },
});
export default store;
