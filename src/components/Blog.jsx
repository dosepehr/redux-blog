import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { blogDeleted, selectBlogById } from '../reducers/blogsSlice';
import { ShowAuthor, ShowTime, ReactionBtns } from './';
const Blog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { blogId } = useParams();
    const blog = useSelector((state) => selectBlogById(state, blogId));
    if (!blog) {
        return <p>پستی که دنبالش میگردی وجود نداره دوست من</p>;
    }
    const handleDelete = (id) => {
        if (blog) {
            dispatch(blogDeleted({ id }));
            navigate('/');
        }
    };

    return (
        <div className='px-10 mt-10'>
            <p className='text-2xl font-bold'>{blog.title}</p>
            <p className='text-xl mt-5 mb-10'>{blog.content}</p>

            <div className='mb-10 flex'>
                <div>
                    <ShowTime timestamp={blog.date} />
                </div>
                <p className='mx-1'>توسط</p>
                <div>
                    <ShowAuthor authorId={blog.authorId} />
                </div>
            </div>
            <ReactionBtns blogId={blog.id} {...blog.reactions} />
            <Link
                to={`/edit-blog/${blog.id}`}
                className='bg-cyan-300 px-2 py-3 rounded-lg hover:bg-sky-400 duration-300'
            >
                ویرایش پست
            </Link>
            <button
                className='border border-gray-400 rounded-lg px-2 py-3 mr-4 hover:bg-slate-300 duration-300'
                onClick={() => {
                    handleDelete(blog.id);
                }}
            >
                حذف پست
            </button>
        </div>
    );
};

export default Blog;
