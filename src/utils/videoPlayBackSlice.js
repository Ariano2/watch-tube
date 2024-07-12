import { createSlice } from '@reduxjs/toolkit';

const videoPlayBackSlice = createSlice({
  name: 'videoPlayBack',
  initialState: {
    title: null,
    channelTitle: null,
    views: null,
  },
  reducers: {
    addData: (state, action) => {
      state.title = action.payload.title;
      state.channelTitle = action.payload.channelTitle;
      state.views = action.payload.views;
    },
    clearData: (state) => {
      state.title = null;
      state.channelName = null;
      state.views = null;
    },
  },
});

export default videoPlayBackSlice.reducer;
export const { addData, clearData } = videoPlayBackSlice.actions;
