import { Blogs } from './components';
import { Outlet } from 'react-router-dom';
function App() {
    return (
        <div className='app'>
            <div className='bg-purple-600 text-white text-center font-bold text-3xl py-10'>
                به وبلاگ ما خوش آمدید :))
            </div>
            <Blogs />
        </div>
    );
}

export default App;

