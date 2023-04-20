import { createSlice, nanoid } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
            {
                id: 1,
                name: 'سپهر دورقی',
            },
            {
                id: 2,
                name: 'علی محمدی',
            },
            {
                id: 3,
                name: 'بابک علیفر',
            },
        ],
    },
    reducers: {},
});

export const selectAllUsers = (state) => state.users.users;
export const selectUsersById = (state, userId) =>
    state.users.users.find((user) => user.id === userId);

export const {} = usersSlice.actions;

export default usersSlice.reducer;
