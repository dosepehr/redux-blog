import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../reducers/blogsSlice';
import usersReducer from '../reducers/usersSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
    },
});
