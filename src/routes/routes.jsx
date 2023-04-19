import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Blog } from '../components';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h3>error</h3>,
    },
    {
        path: '/blog/:blogId',
        element: <Blog />,
    },
]);
