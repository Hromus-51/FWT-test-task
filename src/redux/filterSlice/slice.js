import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    author: {},
    location: {},
    created: {
        from: '',
        before: '',
    },
    page: 1,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setAuthor(state, action) {
            state.author = action.payload;
        },
        setLocation(state, action) {
            state.location = action.payload;
        },
        setCreated(state, action) {
            state.created = { ...state.created, ...action.payload };
        },
        setPage(state, action) {
            state.page = action.payload;
        }
    }
})

export const selectName = (state) => state.filterReducer.name;
export const selectAuthor = (state) => state.filterReducer.author;
export const selectLocation = (state) => state.filterReducer.location;
export const selectCreated = (state) => state.filterReducer.created;
export const selectPage = (state) => state.filterReducer.page;
export const selectFilter = (state) => state.filterReducer;

export const {
    setName,
    setAuthor,
    setLocation,
    setCreated,
    setPage
} = filterSlice.actions;

export default filterSlice.reducer;