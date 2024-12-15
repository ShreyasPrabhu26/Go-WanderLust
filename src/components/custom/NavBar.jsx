import React from 'react';
import { auth } from "../../service/firebase";
import { Button } from '../ui/button';
import SignIn from '../authentication/SignIn';

const NavBar = () => {

    return (
        <div className="p-3 px-5 shadow-md flex justify-between items-center bg-background text-foreground dark:bg-background dark:text-foreground border-b border-border">
            <img
                className="h-16 w-16 rounded-lg"
                src="/logo-transparent.png"
                alt="Go Wanderlust"
            />
            <SignIn />
        </div>
    );
};

export default NavBar;
