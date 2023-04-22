import { useState } from 'react';
import { addNewUser, removeUser, selectAllUsers } from '../reducers/usersSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
const UsersList = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState('');
    const users = useSelector(selectAllUsers);
    const submitHandler = async (e) => {
        e.preventDefault();
        if (user) {
            await dispatch(
                addNewUser({
                    name: user,
                    id: nanoid(),
                })
            );
            setUser('');
        }
    };
    const inputChangeHandler = (e) => {
        setUser(e.target.value);
    };
    const handleDetele = (id) => {
        dispatch(removeUser(id));
    };
    return (
        <div>
            <p className='mt-5'>لیست نویسندگان</p>
            <ul className='space-y-4 mt-3 w-fit'>
                {users.length &&
                    users.map((user) => (
                        <li
                            key={user.id}
                            className='bg-sky-200 p-2 flex items-center justify-between'
                        >
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                            <span
                                className='mr-10 bg-red-500 p-3 text-2xl'
                                onClick={() => handleDetele(user.id)}
                            >
                                &otimes;
                            </span>
                        </li>
                    ))}
            </ul>
            <form
                action=''
                className='mt-10'
                onSubmit={(e) => submitHandler(e)}
            >
                <input
                    onChange={(e) => inputChangeHandler(e)}
                    value={user}
                    type='text'
                    className=' border-2 border-red-500 px-4 py-2 rounded-md'
                    placeholder='نام نویسنده'
                />
                <button className='bg-sky-500 text-white p-2 rounded-md mx-5'>
                    ایجاد نویسنده جدید
                </button>
            </form>
        </div>
    );
};

export default UsersList;
