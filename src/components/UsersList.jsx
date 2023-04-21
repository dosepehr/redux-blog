import React from 'react';
import { fetchUsers, selectAllUsers } from '../reducers/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
const UsersList = () => {
    const users = useSelector((state) => selectAllUsers(state));

    return (
        <div>
            {users.length > 0 &&
                users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
    );
};

export default UsersList;
