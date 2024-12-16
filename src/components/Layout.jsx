import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './custom/NavBar';

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <NavBar />
            <div className="flex-grow overflow-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
