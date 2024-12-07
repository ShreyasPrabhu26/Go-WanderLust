import React from 'react';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="h-[70vh] p-5 flex flex-col gap-5 items-center justify-center bg-background text-foreground dark:bg-background dark:text-foreground">
            <div className="font-extrabold text-center flex flex-col gap-7 ">
                {/* Title */}
                <h1 className="text-3xl md:text-5xl text-primary dark:text-primary">
                    Embark on your next journey with the power of AI.
                </h1>
                <span className="text-xl md:text-3xl tracking-tight text-green-500 dark:text-secondary-foreground">
                    Uncover Hidden Gems, Plan Seamlessly, make every adventure unforgettable.
                </span>
            </div>
            {/* Action Button */}
            <Link to={"/plan-trip"}>
                <Button
                    className="mt-5 p-7 bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground hover:bg-secondary hover:text-secondary-foreground dark:hover:bg-secondary dark:hover:text-secondary"
                >
                    Get Started
                </Button>
            </Link>
        </div>
    );
};

export default Hero;
