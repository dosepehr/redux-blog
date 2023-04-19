import { createSlice, nanoid } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [
        {
            id: nanoid(),
            date: new Date().toLocaleString(),
            title: 'اولین پست',
            content: 'محتوای اولین پست',
        },
        {
            id: nanoid(),
            date: new Date().toLocaleString(),
            title: 'دومین پست',
            content: 'محتوای دومین پست',
        },
    ],
    reducers: {
        blogAdded: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { blogAdded } = blogsSlice.actions;

export default blogsSlice.reducer;
