import { createSlice } from '@reduxjs/toolkit';
import { fetchGallery } from './asyncActions';

const initialState = {
    gallery: [],
    status: ''
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGallery.pending, (state) => {
            state.gallery = [];
            state.status = 'loading';
        })

        builder.addCase(fetchGallery.fulfilled, (state, action) => {
            state.gallery = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchGallery.rejected, (state) => {
            state.gallery = [];
            state.status = 'error';
        })
    }
})

export const selectGallery = (state) => state.galleryReducer.gallery;
export const selectStatus = (state) => state.galleryReducer.status;

export default gallerySlice.reducer;
