import About from './About/About.component';
import Artists from './Artists/Artists.component';
import Discography from './Discography/Discography.component';
import FullRelease from './Discography/FullRelease/FullRelease.component';
import Home from './Home/Home.component';
import Projects from './Projects/Projects.component';
import App from '../App';
import Error404 from '../components/Error404/Error404.component';

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'discography',
                element: <Discography />,
            },
            { path: 'discography/:id', element: <FullRelease /> },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'artists',
                element: <Artists />,
            },
        ],
    },
];
