import { createSlice, nanoid } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [
            {
                id: nanoid(),
                date: new Date().toISOString(),
                title: 'اولین پست',
                content: 'محتوای اولین پست',
                authorId: 1,
            },
            {
                id: nanoid(),
                date: new Date().toISOString(),
                title: 'دومین پست',
                content: 'محتوای دومین پست',
                authorId: 2,
            },
        ],
    },
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload);
            },
            prepare(title, content,authorId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        authorId,
                    },
                };
            },
        },
        blogUpdated: (state, action) => {
            const { id, title, content } = action.payload;
            const existingBlog = state.blogs.find((blog) => blog.id === id);
            if (existingBlog) {
                (existingBlog.title = title), (existingBlog.content = content);
            }
        },
        blogDeleted: (state, action) => {
            state.blogs = state.blogs.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

export const { blogAdded, blogUpdated, blogDeleted } = blogsSlice.actions;

export default blogsSlice.reducer;
