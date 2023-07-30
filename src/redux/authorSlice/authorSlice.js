import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthors } from './asyncActions';

const initialState = {
    authors: [],
    status: ''
}

export const authorSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAuthors.pending, (state) => {
            state.authors = [];
            state.status = 'loading';
        })

        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            state.authors = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchAuthors.rejected, (state) => {
            state.authors = [];
            state.status = 'error';
        })
    }
})

export const selectAuthors = (state) => state.authorReducer.authors;
export const selectStatus = (state) => state.authorReducer.status;

export default authorSlice.reducer;