import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllBlogs } from '../reducers/blogsSlice';
import { ShowTime, ReactionBtns, BlogsList } from './';
import { selectAllUsers } from '../reducers/usersSlice';
const User = () => {
    const { userId } = useParams();
    const blogs = useSelector((state) => selectAllBlogs(state)).filter(
        (blog) => blog.authorId == userId
    );
    const user = useSelector((state) => selectAllUsers(state)).find(
        (user) => user.id == userId
    );
    return (
        <div>
            {/* TODO 
            1. add find user route to services to check if the user exists
             */}
            {user ? (
                <BlogsList blogs={blogs} noBlogs={`برای ${user.name} هیچ پستی پیدا نشد`} />
            ) : (
                <p>همچین نویسنده ای پیدا نشد</p>
            )}
        </div>
    );
};

export default User;
