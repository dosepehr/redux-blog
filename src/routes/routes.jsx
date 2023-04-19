import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Blog, Blogs, CreateBlog } from '../components';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h3>error</h3>,
        children: [
            {
                path: '/',
                element: <Blogs />,
            },
            {
                path: '/blog/:blogId',
                element: <Blog />,
            },
            {
                path: '/blog/create-blog',
                element: <CreateBlog />,
            },
        ],
    },
]);
