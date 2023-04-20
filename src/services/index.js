import axios from 'axios';

const BASE_URL = 'http://localhost:9000';
// ! get all blogs
// * http://localhost:9000/blogs

export const getAllBlogs = () => {
    const url = `${BASE_URL}/blogs`;
    return axios.get(url);
};

// ! get a blog
// * http://localhost:9000/blogs/:blogId
export const getBlog = (blogId) => {
    const url = `${BASE_URL}/blogs/${blogId}`;
    return axios.get(url);
};

// ! get all users
// * http://localhost:9000/users
export const getAllUsers = () => {
    const url = `${BASE_URL}/users`;
    return axios.get(url);
};

// ! get a users
// * http://localhost:9000/user
export const getUser = (userId) => {
    const url = `${BASE_URL}/users/${userId}`;
    return axios.get(url);
};

// ! create a blog
// * http://localhost:9000/blogs
export const createBlog = (blogInfo) => {
    const url = `${BASE_URL}/blogs`;
    return axios.post(url, blogInfo);
};

// ! update a blog
// * http://localhost:9000/blogs/:blogId
export const updateBlog = (blogInfo, blogId) => {
    const url = `${BASE_URL}/blogs/${blogId}`;
    return axios.put(url, blogInfo);
};

// ! delete a blog
// * http://localhost:9000/blogs/:blogId
export const deleteBlog = (blogId) => {
    const url = `${BASE_URL}/blogs/${blogId}`;
    return axios.delete(url);
};
