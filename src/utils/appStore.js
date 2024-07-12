import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import videoPlayBackReducer from './videoPlayBackSlice';

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videoPlayBack: videoPlayBackReducer,
  },
});

export default appStore;
