import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from '../services';

export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const { data } = await getAllUsers();
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const selectAllUsers = (state) => state.users.users;
export const selectUserById = (state, userId) =>
    state.users.users.find((user) => user.id === userId);

export default usersSlice.reducer;
