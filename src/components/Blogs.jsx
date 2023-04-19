import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Blogs = () => {
    const blogs = useSelector((state) => state.blogs);
    return (
        <>
            <div className='flex justify-center'>
                <Link
                to='/blog/create-blog'
                    className='w-3/4 bg-green-500 text-white text-center mt-10 py-10 text-2xl'>
                    ساخت بلاگ جدید
                </Link>
            </div>
            {blogs.length ? (
                <div className='px-10'>
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className='border-2 border-purple-800 rounded-md p-10 mt-5 relative'
                        >
                            <p className='text-2xl font-bold'>{blog.title}</p>
                            <p className='text-xl mt-5 mb-10'>
                                {blog.content.slice(0, 50)}...
                            </p>
                            <Link
                                to={`/blog/${blog.id}`}
                                className='bg-cyan-300 px-2 py-3 rounded-lg hover:bg-sky-400 duration-300 active:translate-y-1 visited:bg-purple-500 visited:text-white absolute bottom-2'
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
