import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';
import { ReleaseType } from '../../types/types';

type InitialStateType = {
    items: Array<ReleaseType>;
    releaseByLink: ReleaseType | null;
    idLoading: boolean;
};

const initialState: InitialStateType = {
    items: [],
    releaseByLink: null,
    idLoading: true,
};

export const fetchReleases = createAsyncThunk('releases', async () => {
    const { data } = await axios.get('/releases');
    return data;
});

export const fetchReleaseByLink = createAsyncThunk(
    'release',
    async (link: string | undefined) => {
        const { data } = await axios.get(`/releases/${link}`);
        return data;
    },
);

const releasesSlice = createSlice({
    name: 'releases',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchReleases.fulfilled, (state, action: any) => {
            state.items = action.payload;
            state.idLoading = false;
        });
        builder.addCase(fetchReleases.pending, state => {
            state.idLoading = true;
        });
        builder.addCase(fetchReleases.rejected, state => {
            state.idLoading = false;
        });

        builder.addCase(fetchReleaseByLink.fulfilled, (state, action: any) => {
            state.releaseByLink = action.payload;
            state.idLoading = false;
        });
        builder.addCase(fetchReleaseByLink.pending, state => {
            state.releaseByLink = null;
            state.idLoading = true;
        });
        builder.addCase(fetchReleaseByLink.rejected, state => {
            state.idLoading = false;
        });
    },
});

export const releaseReducer = releasesSlice.reducer;
