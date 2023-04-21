import { createSlice, nanoid ,} from '@reduxjs/toolkit';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        status: 'idle',
        error:null
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
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

export const { blogAdded, blogUpdated, blogDeleted, blogReacted } =
    blogsSlice.actions;

export default blogsSlice.reducer;
