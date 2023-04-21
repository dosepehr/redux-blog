import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from '../services';
const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {},
});

export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const {data} = await getAllUsers();
    return data;
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
