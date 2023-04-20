import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Blog = () => {
    const { blogId } = useParams();
    const blog = useSelector((state) =>
        state.blogs.find((blog) => blog.id === blogId)
    );
    if (!blog) {
        return <p>پستی که دنبالش میگردی وجود نداره دوست من</p>;
    }
    return (
        <div className='px-10 mt-10'>
            <p className='text-2xl font-bold'>{blog.title}</p>
            <p className='text-xl mt-5 mb-10'>{blog.content}</p>

            <Link
                to={`/edit-blog/${blog.id}`}
                className='bg-cyan-300 px-2 py-3 rounded-lg hover:bg-sky-400 duration-300'
            >
                ویرایش پست
            </Link>
        </div>
    );
};

export default Blog;
