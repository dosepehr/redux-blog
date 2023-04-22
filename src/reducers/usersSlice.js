import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { createUser, deleteUser, getAllUsers } from '../services';

const userAdaptor = createEntityAdapter();
const initialState = userAdaptor.getInitialState({
    status: 'idle',
    error: null,
});

export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const { data } = await getAllUsers();
    return data;
});
export const addNewUser = createAsyncThunk(
    '/users/addNewUser',
    async (userInfo) => {
        const { data } = await createUser(userInfo);
        return data;
    }
);

export const removeUser = createAsyncThunk(
    '/users/removeUser',
    async (userId) => {
        await deleteUser(userId);
        return userId;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, userAdaptor.setAll)
            .addCase(addNewUser.fulfilled, userAdaptor.addOne)
            .addCase(removeUser.fulfilled, userAdaptor.removeOne);
    },
});

export const { selectAll: selectAllUsers, selectById: selectUserById } =
    userAdaptor.getSelectors((state) => state.users);

export default usersSlice.reducer;
