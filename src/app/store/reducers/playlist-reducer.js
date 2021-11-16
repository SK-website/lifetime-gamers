/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    games: [],
    showEditTitleInput: [],
    showNewGameInput: false,
    isDisabled: false,
  },
  reducers: {
    setPlaylistAction: (state, dataFromServer) => {
      state.games = dataFromServer.payload;
    },
    changeStatusAction: (state, id) => {
      state.games.forEach((el) => {
        if (el.id === id.payload) el.completed = !el.completed;
      });
    },
    deleteGameAction: (state, id) => {
      state.games = state.games.filter((el) => el.id !== id.payload);
    },
    addNewGameAction: (state, newItem) => {
      state.games.unshift(newItem.payload);
    },

    showNewGameInputAction: (state, isShown) => {
      state.showNewGameInput = isShown.payload;
    },
    showEditTitleAction: (state, id) => {
      state.showEditTitleInput.push(id.payload);
      state.isDisabled = true;
    },
    setEditedTitleAction: (state, data) => {
      const { ID, newTitle } = data.payload;
      state.games.forEach((el) => {
        if (el.id === ID) el.title = newTitle;
      });
      state.isDisabled = false;
      state.showEditTitleInput.length = 0;
    },
  },
});

export default playlistSlice.reducer;

export const {
  setPlaylistAction,
  changeStatusAction,
  deleteGameAction,
  addNewGameAction,
  showNewGameInputAction,
  showEditTitleAction,
  setEditedTitleAction,
} = playlistSlice.actions;
