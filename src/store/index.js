import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../reducers/blogsSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
    },
});
