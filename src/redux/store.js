import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE, PAUSE, PERSIST,
    PURGE, REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//=============================================
import themeReducer from './themeSlice/slice';
import filterReducer from './filterSlice/slice';
import authorReducer from './authorSlice/authorSlice';
import locationReducer from './locationSlice/locationSlice';
import galleryReducer from './gallerySlice/gallerySlice';

const persistConfig = {
    key: 'fwt',
    storage,
    blacklist: ['authorReducer', 'locationReducer', 'galleryReducer'],
}

const rootReducer = combineReducers({
    themeReducer,
    filterReducer,
    authorReducer,
    locationReducer,
    galleryReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();
