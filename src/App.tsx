import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer.component';
import Navbar from './components/Navbar/Navbar.component';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="Content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
