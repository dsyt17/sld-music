import { configureStore } from '@reduxjs/toolkit';

import { releaseReducer } from './slices/releasesSlice';

const store = configureStore({
    reducer: {
        releases: releaseReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
