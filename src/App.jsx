import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Spinner } from './components';
import { fetchBlogs } from './reducers/blogsSlice';
import { fetchUsers } from './reducers/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const blogStatus = useSelector((state) => state.blogs.status);
    const usersStatus = useSelector((state) => state.users.status);
    useEffect(() => {
        if (blogStatus == 'idle') {
            dispatch(fetchBlogs());
        }
        if (usersStatus == 'idle') {
            dispatch(fetchUsers());
        }
        if (blogStatus == 'loading' || usersStatus == 'loading') {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [blogStatus, usersStatus, dispatch]);
    return (
        <>
            <Navbar />
            {loading ? <Spinner /> : <Outlet />}
        </>
    );
}

export default App;

