import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';
import { ArtistType } from '../../types/types';

type InitialStateType = {
    artist: ArtistType | null;
    idLoading: boolean;
    artistsNames: Array<{
        _id: string;
        nickName: string;
        link: string;
    }> | null;
};

const initialState: InitialStateType = {
    artist: null,
    idLoading: true,
    artistsNames: null,
};

export const fetchArtist = createAsyncThunk(
    'artist',
    async (link: string | undefined) => {
        const { data } = await axios.get(`/artist/${link}`);
        return data;
    },
);

export const fetchArtistsNames = createAsyncThunk('artistsNames', async () => {
    const { data } = await axios.get('/artist/all');
    return data;
});

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

        builder.addCase(fetchArtistsNames.pending, state => {
            state.idLoading = true;
        });
        builder.addCase(fetchArtistsNames.fulfilled, (state, action: any) => {
            state.artistsNames = action.payload;
            state.idLoading = false;
        });
        builder.addCase(fetchArtistsNames.rejected, state => {
            state.idLoading = false;
        });
    },
});

export const artistReducer = artistSlice.reducer;
