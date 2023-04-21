import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className='bg-purple-600 text-white text-center  py-10'>
                <Link
                    className='hover:text-cyan-300 duration-300 font-bold text-3xl'
                    to='/'
                >
                    به وبلاگ ما خوش آمدید :))
                </Link>
            </div>
            <div className='bg-yellow-300 w-fit py-2 hover:bg-orange-300 hover:shadow-lg shadow-slate-500 duration-300'>
                <Link to='/usersList' >مشاهده لیست نویسندگان</Link>
            </div>
        </>
    );
};

export default Navbar;
