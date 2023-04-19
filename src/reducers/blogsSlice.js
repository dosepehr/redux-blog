import { createSlice, nanoid } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [
        {
            id: nanoid(),
            date: new Date().toLocaleString(),
            title: '1st post',
            content: '1st content',
        },
    ],
    reducers: {},
});

export default blogsSlice.reducer;
