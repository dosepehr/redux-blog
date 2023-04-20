import { useSelector } from 'react-redux';
import { selectUsersById } from '../reducers/usersSlice';

const ShowAuthor = ({ authorId }) => {
    const user = useSelector((state) => selectUsersById(state, authorId));
    return <div>{user ? user.name : 'نویسنده ناشناس'}</div>;
};

export default ShowAuthor;
