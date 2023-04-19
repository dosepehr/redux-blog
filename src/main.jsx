import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// routes
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
// tailwindcss
import '../index.css';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);

