import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <div className='flex-grow overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
