import {
    createSlice,
    createAsyncThunk,
    createSelector,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { createBlog, getAllBlogs, deleteBlog, updateBlog } from '../services';

const blogAdaptor = createEntityAdapter({
    // selectId:blogId if the unique key name wasn't id
    sortComparer: (a, b) => b.date.localeCompare(a.date),
});
const initialState = blogAdaptor.getInitialState({
    status: 'idle',
    error: null,
    // {ids:[],entities:{},status:'idle',error:null}
});

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
    initialState,
    reducers: {
        blogReacted: (state, action) => {
            const { reaction, blogId } = action.payload;
            const selectedBlog = state.entities[blogId];
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
                // state.blogs = action.payload;
                blogAdaptor.upsertMany(state, action.payload);
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewBlog.fulfilled, blogAdaptor.addOne)
            .addCase(removeBlog.fulfilled, blogAdaptor.removeOne)
            .addCase(editBlog.fulfilled, blogAdaptor.updateOne);
    },
});

export const {
    selectAll: selectAllBlogs,
    selectById: selectBlogById,
    selectIds: selectBlogIds,
} = blogAdaptor.getSelectors((state) => state.blogs);

export const selectUserBlogs = createSelector(
    [selectAllBlogs, (state, userId) => userId],
    (blogs, userId) => blogs.filter((blog) => blog.authorId === userId)
);

export const { blogReacted } = blogsSlice.actions;

export default blogsSlice.reducer;
