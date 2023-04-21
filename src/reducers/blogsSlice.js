import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBlogs } from '../services';

export const fetchBlogs = createAsyncThunk('/blogs/fetchBlogs', async () => {
    const { data } = await getAllBlogs();
    // returns as action.payload
    return data;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload);
            },
            prepare(title, content, authorId) {
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
        blogReacted: (state, action) => {
            const { reaction, blogId } = action.payload;
            const selectedBlog = state.blogs.find((blog) => blog.id === blogId);
            if (selectedBlog) {
                selectedBlog.reactions[reaction]++;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'completed';
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

export const { blogAdded, blogUpdated, blogDeleted, blogReacted } =
    blogsSlice.actions;

export default blogsSlice.reducer;
