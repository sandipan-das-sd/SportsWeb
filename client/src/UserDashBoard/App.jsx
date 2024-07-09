

import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Maps from './pages/Maps';
import Footer from './components/Footer';

function UserApp() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default UserApp;
