import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserBlogs } from '../reducers/blogsSlice';
import { BlogsList } from './';
import { selectAllUsers } from '../reducers/usersSlice';
const User = () => {
    const { userId } = useParams();
    const blogs = useSelector((state) => selectUserBlogs(state, userId));
    const user = useSelector((state) => selectAllUsers(state)).find(
        (user) => user.id == userId
    );
    return (
        <div>
            <p className='my-4 mx-10 font-bold text-3xl'>پست های {user.name}</p>
            {user ? (
                <BlogsList
                    blogs={blogs}
                    noBlogs={`برای ${user.name} هیچ پستی پیدا نشد`}
                />
            ) : (
                <p>همچین نویسنده ای پیدا نشد</p>
            )}
        </div>
    );
};

export default User;
