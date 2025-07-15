import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '../components/pages/Home/HomePage';
import ErrorPage from '../components/pages/Error/ErrorPage';
import BioPage from '../components/pages/Bio/BioPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "bio",
                element: <BioPage />
            }
        ]
    }
])

export default router;