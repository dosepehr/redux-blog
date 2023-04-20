import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogUpdated } from '../reducers/blogsSlice';
import { useNavigate, useParams } from 'react-router-dom';
const EditBlog = () => {
    const { blogId } = useParams();
    const blog = useSelector((state) =>
        state.blogs.find((blog) => blog.id == blogId)
    );
    const [blogData, setBlogData] = useState({
        title: blog.title,
        content: blog.content,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputChangeHandler = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (blogData.title && blogData.content) {
            dispatch(
                blogUpdated({
                    id: blogId,
                    title: blogData.title,
                    content: blogData.content,
                })
            );
            setBlogData({
                title: '',
                content: '',
            });
            navigate(`/blog/${blogId}`);
        }
    };

    if (!blog) {
        return <p>پستی که دنبالش میگردی وجود نداره دوست من</p>;
    }

    return (
        <div className='px-10'>
            <h2 className='text-3xl font-semibold mt-5'>ویرایش پست</h2>
            <form autoComplete='off' onSubmit={(e) => submitHandler(e)}>
                <div className='flex flex-col mt-10 justify-center'>
                    <label htmlFor='title'>عنوان پست :</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='border-2 border-gray-300 mt-5 p-5 w-1/2'
                        onChange={(e) => inputChangeHandler(e)}
                        value={blogData.title}
                    ></input>
                </div>
                <div className='flex flex-col mt-10 justify-center'>
                    <label htmlFor='content'>محتوای اصلی :</label>
                    <textarea
                        name='content'
                        id='content'
                        className='border-2 border-gray-300 mt-5 py-10 px-5 w-1/2'
                        onChange={(e) => inputChangeHandler(e)}
                        value={blogData.content}
                    ></textarea>
                </div>
                <button className='bg-orange-600 text-white px-2 py-3 rounded-md mt-5'>
                    ذخیره تغییرات
                </button>
            </form>
        </div>
    );
};

export default EditBlog;
