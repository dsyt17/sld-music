import About from './About/About.component';
import Contacts from './Contacts/Contacts.component';
import Discography from './Discography/Discography.component';
import Projects from './Projects/Projects.component';
import App from '../App';

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404</h1>,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'discography',
                element: <Discography />,
            },
            {
                path: 'contacts',
                element: <Contacts />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
        ],
    },
];
