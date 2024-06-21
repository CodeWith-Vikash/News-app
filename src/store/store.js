// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './AppSlice';
import searchReducer from './SearchSlice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        search: searchReducer
    },
});
