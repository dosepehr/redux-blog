import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-purple-600 text-white text-center font-bold text-3xl py-10'>
            <Link
                className='hover:text-cyan-300 duration-300'
            to='/'
            >به وبلاگ ما خوش آمدید :))</Link>
        </div>
    );
};

export default Navbar;
