import { useSelector } from 'react-redux';
import { selectUserById } from '../reducers/usersSlice';

const ShowAuthor = ({ authorId }) => {
    const user = useSelector((state) => selectUserById(state, authorId));
    return <div>{user ? user.name : 'نویسنده ناشناس'}</div>;
};

export default ShowAuthor;
