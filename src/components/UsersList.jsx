import React from 'react';
import { selectAllUsers } from '../reducers/usersSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const UsersList = () => {
    const users = useSelector((state) => selectAllUsers(state));

    return (
        <div>
            <p>لیست نویسندگان</p>
            <ul className='space-y-2 mt-3 w-fit'>
                {users.length &&
                    users.map((user) => (
                        <li key={user.id} className='bg-sky-200'>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default UsersList;
