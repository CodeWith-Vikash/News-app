// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './AppSlice';
import detailsReducer from './DetailSlice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        details: detailsReducer
    },
});
