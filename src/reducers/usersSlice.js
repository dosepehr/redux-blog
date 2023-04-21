import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from '../services';

export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const { data } = await getAllUsers();
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectAllUsers = (state) => state.users;
export const selectUsersById = (state, userId) =>
    state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
