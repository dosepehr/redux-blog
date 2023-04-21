import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchBlogs } from './reducers/blogsSlice';
import { fetchUsers } from './reducers/usersSlice';
import { useDispatch } from 'react-redux';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogs());
        dispatch(fetchUsers());
    }, []);
    return (
        <div className='app'>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;

