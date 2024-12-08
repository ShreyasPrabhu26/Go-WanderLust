import React from 'react';
import { Button } from '../ui/button';

const NavBar = () => {
    return (
        <div className="p-3 px-5 shadow-md flex justify-between items-center bg-background text-foreground dark:bg-background dark:text-foreground border-b border-border">
            <img
                className="h-16 w-16 rounded-lg"
                src="/logo-transparent.png"
                alt="Go Wanderlust"
            />
            <Button
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground px-4 py-2 rounded-lg"
            >
                Get Started
            </Button>
        </div>
    );
};

export default NavBar;
