import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchLocations = createAsyncThunk('locations / fetchLocationsStatus', async (params) => {
    const { url, category } = params;
    const { data } = await axios.get(`${url}${category}`);
    return data;
});