import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h3>error</h3>,
    },
]);
