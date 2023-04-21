import React from 'react';
import { selectAllUsers } from '../reducers/usersSlice';
import { useSelector } from 'react-redux';
const UsersList = () => {
    const users = useSelector((state) => selectAllUsers(state));

    return (
        <div>
            <p>لیست نویسندگان</p>
            <ul className='space-y-2 mt-3 w-fit'>
                {users.length > 0 &&
                    users.map((user) => <li key={user.id} className='bg-sky-200'>{user.name}</li>)}
            </ul>
        </div>
    );
};

export default UsersList;
