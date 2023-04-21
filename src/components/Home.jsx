import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllBlogs } from '../reducers/blogsSlice';
import { BlogsList } from './';

const Home = () => {
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
            <BlogsList blogs={blogs} noBlogs='پستی پیدا نشد :(('/>
        </>
    );
};

export default Home;
