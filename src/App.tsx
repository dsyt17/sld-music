import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="Content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
