import { useState } from 'react';
import { useDispatch } from 'react-redux';
const CreateBlog = () => {
    const [blogData, setBlogData] = useState({});
    const inputChangeHandler = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (blogData.title && blogData.content) {
            console.log(blogData);
            dispatch();
            setBlogData({
                title: '',
                content: '',
            });
        }
    };
    return (
        <div>
            <h2>ساخت پست جدید</h2>
            <form autoComplete='off' onSubmit={(e) => submitHandler(e)}>
                <div className='flex  mt-10 w-fit justify-center items-center'>
                    <label htmlFor='title'>عنوان پست :</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='border-2 border-purple-500 mr-5 py-10 px-5'
                        onChange={(e) => inputChangeHandler(e)}
                        value={blogData.title}
                    ></input>
                </div>
                <div className='flex mt-10 w-fit justify-center items-center'>
                    <label htmlFor='content'>محتوای اصلی :</label>
                    <textarea
                        name='content'
                        id='content'
                        className='border-2 border-cyan-300 mr-5 py-10 px-5'
                        onChange={(e) => inputChangeHandler(e)}
                        value={blogData.content}
                    ></textarea>
                </div>
                <button className='bg-orange-600 text-white px-2 py-3 rounded-md'>
                    ذخیره پست
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
