import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBlog, getAllBlogs, deleteBlog } from '../services';

export const fetchBlogs = createAsyncThunk('/blogs/fetchBlogs', async () => {
    const { data } = await getAllBlogs();
    // returns as action.payload
    return data;
});
export const addNewBlog = createAsyncThunk(
    '/blogs/addNewBlog',
    async (blogInfo) => {
        const { data } = await createBlog(blogInfo);
        return data;
    }
);
export const removeBlog = createAsyncThunk(
    '/blogs/deleteBlog',
    async (blogId) => {
        await deleteBlog(blogId);
        return blogId;
    }
);

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        blogUpdated: (state, action) => {
            const { id, title, content } = action.payload;
            const existingBlog = state.blogs.find((blog) => blog.id === id);
            if (existingBlog) {
                (existingBlog.title = title), (existingBlog.content = content);
            }
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
            })
            .addCase(addNewBlog.fulfilled, (state, action) => {
                state.blogs.push(action.payload);
            })
            .addCase(removeBlog.fulfilled, (state, action) => {
                state.blogs = state.blogs.filter(
                    (blog) => blog.id !== action.payload
                );
            });
    },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

export const { blogUpdated, blogReacted } = blogsSlice.actions;

export default blogsSlice.reducer;
