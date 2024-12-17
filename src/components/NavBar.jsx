import React from 'react';
import SignIn from './authentication/SignIn';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="p-3 px-5 shadow-md flex justify-between items-center bg-background text-foreground dark:bg-background dark:text-foreground border-b border-border">
            <img
                className="h-16 w-16 rounded-lg cursor-pointer"
                src="/logo-transparent.png"
                alt="Go Wanderlust"
                onClick={() => navigate('/')}
            />
            <SignIn />
        </div>
    );
};

export default NavBar;
