import { configureStore } from '@reduxjs/toolkit';

import { artistReducer } from './slices/artistSlice';
import { releaseReducer } from './slices/releasesSlice';

const store = configureStore({
    reducer: {
        releases: releaseReducer,
        artist: artistReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
