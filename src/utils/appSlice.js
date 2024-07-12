import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleSideBar, closeSideBar } = appSlice.actions;
