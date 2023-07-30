import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchGallery = createAsyncThunk('gallery / fetchGalleryStatus', async (params) => {
    const {
        urlString,
        nameString,
        authorString,
        locationString,
        createdString,
        pageString
    } = params;

    const { data } = await axios.get(`${urlString}?&${nameString}&${authorString}&${locationString}&${createdString}&${pageString}`);
    return data;
});