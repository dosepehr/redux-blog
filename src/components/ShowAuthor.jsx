import { useSelector } from 'react-redux';

const ShowAuthor = ({ authorId }) => {
    const user = useSelector((state) => state.users);
    console.log(user)
    return <div>{user ? user.name : 'نویسنده ناشناس'}</div>;
};

export default ShowAuthor;
