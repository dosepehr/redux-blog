import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, getAllUsers } from '../services';

export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const { data } = await getAllUsers();
    return data;
});
export const addNewUser = createAsyncThunk('/users/addNewUser', async (userInfo) => {
    const { data } = await createUser(userInfo);
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
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'completed';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            });
    },
});

export const selectAllUsers = (state) => state.users.users;
export const selectUserById = (state, userId) =>
    state.users.users.find((user) => user.id === userId);

export default usersSlice.reducer;
