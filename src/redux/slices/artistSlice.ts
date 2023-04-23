import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';
import { ArtistType } from '../../types/types';

type InitialStateType = {
    artist: ArtistType | null;
    idLoading: boolean;
};

const initialState: InitialStateType = {
    artist: null,
    idLoading: true,
};

export const fetchArtist = createAsyncThunk(
    'artist',
    async (link: string | undefined) => {
        const { data } = await axios.get(`/artist/${link}`);
        return data;
    },
);

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchArtist.fulfilled, (state, action: any) => {
            state.artist = action.payload;
            state.idLoading = false;
        });
        builder.addCase(fetchArtist.pending, state => {
            state.artist = null;
            state.idLoading = true;
        });
        builder.addCase(fetchArtist.rejected, state => {
            state.idLoading = false;
        });
    },
});

export const artistReducer = artistSlice.reducer;
