import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllBlogs } from '../reducers/blogsSlice';
import { ShowTime, ShowAuthor, ReactionBtns } from './';
const Blogs = () => {
    const blogs = useSelector((state) => selectAllBlogs(state));
    return (
        <>
            <div className='flex justify-center'>
                <Link
                    to='/blog/create-blog'
                    className='w-3/4 bg-green-500 hover:bg-green-600 duration-300 text-white text-center mt-10 py-10 text-2xl'
                >
                    ساخت بلاگ جدید
                </Link>
            </div>
            {blogs.length ? (
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
                                    <p className='mx-1'>توسط</p>
                                    <div>
                                        <ShowAuthor authorId={blog.authorId} />
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
            ) : (
                <p className='bg-cyan-300 py-10 text-center text-3xl'>
                    هیچ پستی پیدا نشد :((
                </p>
            )}
        </>
    );
};

export default Blogs;
