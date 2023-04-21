import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../reducers/blogsSlice';
import usersReducer from '../reducers/usersSlice';
import { fetchUsers } from '../reducers/usersSlice';
export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
    },
});

// fetch all users from api
store.dispatch(fetchUsers());
