import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { createBlog, getAllBlogs, deleteBlog, updateBlog } from '../services';

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

export const editBlog = createAsyncThunk('/blogs/edit', async (blogInfo) => {
    const { data } = await updateBlog(blogInfo, blogInfo.id);
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
            })
            .addCase(editBlog.fulfilled, (state, action) => {
                const { id } = action.payload;
                const editedBlogIndex = state.blogs.findIndex(
                    (blog) => blog.id === id
                );
                state.blogs[editedBlogIndex] = action.payload;
            });
    },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

export const {  blogReacted } = blogsSlice.actions;

export default blogsSlice.reducer;
