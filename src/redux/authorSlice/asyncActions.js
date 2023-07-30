import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchAuthors = createAsyncThunk('authors / fetchAuthorsStatus', async (params) => {
    const { url, category } = params;
    const { data } = await axios.get(`${url}${category}`);
    return data;
});