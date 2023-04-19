import { useParams } from 'react-router-dom';
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
        <div className='px-10 mt-10' >
            <p className='text-2xl font-bold'>{blog.title}</p>
            <p className='text-xl mt-5 mb-10'>{blog.content}</p>
        </div>
    );
};

export default Blog;
