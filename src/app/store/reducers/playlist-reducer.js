import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    games: [],
  },
  reducers: {
    setPlaylistAction: (state, dataFromServer) => {
      state.games = dataFromServer.payload;
    },
    //   removeTickerAction: (state, ticker) => {
    //     if (!state.userTickers.length) {
    //       state.tickers.forEach((el) => {
    //         state.userTickers.push(el.ticker);
    //       });
    //       state.userTickers = state.userTickers.filter((el) => el !== ticker.payload);
    //     }
    //     state.userTickers = state.userTickers.filter((el) => el !== ticker.payload);
    //   },
    //   addTickerAction: (state, ticker) => {
    //     state.userTickers.push(ticker.payload);
    //   },
    // },
  },
});

export default playlistSlice.reducer;
// export const playlistState = (state) => state.playlistSlice.reducer;
export const { setPlaylistAction } = playlistSlice.actions;
