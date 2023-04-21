import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllBlogs } from '../reducers/blogsSlice';
import { ShowTime, ReactionBtns } from './';
const User = () => {
    const { userId } = useParams();
    const blogs = useSelector((state) => selectAllBlogs(state)).filter(
        (blog) => blog.authorId == userId
    );
    return (
        <div>
            {/* TODO 
            1. add find user route to services to check if the user exists
            2.refactor the following code
             */}
            {blogs.length ? (
                <div>
                    <div className='px-10'>
                        {blogs
                            .slice()
                            .sort((a, b) => b.date.localeCompare(a.date))
                            .map((blog) => (
                                <div
                                    key={blog.id}
                                    className='border-2 border-purple-800 rounded-md p-10 mt-5'
                                >
                                    <p className='text-2xl font-bold'>
                                        {blog.title}
                                    </p>
                                    <p className='text-xl mt-5 mb-10'>
                                        {blog.content.slice(0, 50)}...
                                    </p>

                                    <div className='mb-10 flex'>
                                        <div>
                                            <ShowTime timestamp={blog.date} />
                                        </div>
                                    </div>
                                    <ReactionBtns
                                        blogId={blog.id}
                                        {...blog.reactions}
                                    />
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className='bg-cyan-300 px-2 py-3 rounded-lg hover:bg-sky-400 duration-300 visited:bg-purple-500 visited:text-white'
                                    >
                                        دیدن کامل پست
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <p>برای این نویسنده پستی یافت نشد</p>
            )}
        </div>
    );
};

export default User;
