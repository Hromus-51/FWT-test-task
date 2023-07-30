import { createSlice } from '@reduxjs/toolkit';
import { fetchLocations } from '../locationSlice/asyncActions';

const initialState = {
    locations: [],
    status: ''
}

export const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLocations.pending, (state) => {
            state.locations = [];
            state.status = 'loading';
        })

        builder.addCase(fetchLocations.fulfilled, (state, action) => {
            state.locations = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchLocations.rejected, (state) => {
            state.locations = [];
            state.status = 'error';
        })
    }
})

export const selectLocations = (state) => state.locationReducer.locations;
export const selectStatus = (state) => state.locationReducer.status;

export default locationSlice.reducer;