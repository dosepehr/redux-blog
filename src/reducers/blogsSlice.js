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
    reducers: {},
});

export default blogsSlice.reducer;
