import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogAdded } from '../reducers/blogsSlice';
import { useNavigate } from 'react-router-dom';
import { selectAllUsers } from '../reducers/usersSlice';
const CreateBlog = () => {
    const users = useSelector((action) => selectAllUsers(action));
    const [blogData, setBlogData] = useState({});
    const inputChangeHandler = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (blogData.title && blogData.content && blogData.authorId) {
            dispatch(
                blogAdded(blogData.title, blogData.content, +blogData.authorId)
            );
            setBlogData({
                title: '',
                content: '',
            });
            navigate('/');
        }
    };
    return (
        <div className='px-10'>
            <h2 className='text-3xl font-semibold mt-5'>ساخت پست جدید</h2>
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
                <select
                    className='border-2 border-cyan-400 p-2 ml-4 rounded-lg'
                    name='authorId'
                    onChange={(e) => inputChangeHandler(e)}
                    value={blogData.authorId}
                >
                    <option value=''>انتخاب نویسنده</option>
                    {users.map((user) => (
                        <option value={user.id} key={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <button
                    className='bg-orange-600 text-white px-2 py-3 rounded-md mt-5'
                >
                    ذخیره پست
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
