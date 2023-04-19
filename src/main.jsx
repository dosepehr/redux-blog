import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// routes
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
// tailwindcss
import '../index.css';
// store
import { Provider } from 'react-redux';
import { store } from './store';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    </StrictMode>
);

