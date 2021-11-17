/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pageNumber: 0,
  },
  reducers: {
    incrementPageAction: (state) => {
      state.pageNumber += 1;
    },
    decrementPageAction: (state) => {
      state.pageNumber -= 1;
    },
    sendToFirstPageAction: (state) => {
      state.pageNumber = 0;
    },
    sendToLastPageAction: (state, pageNumber) => {
      state.pageNumber = pageNumber.payload - 1;
    },
  },
});

export default paginationSlice.reducer;

export const { incrementPageAction, decrementPageAction, sendToLastPageAction, sendToFirstPageAction } =
  paginationSlice.actions;
