import React from 'react'

const Header = () => {
    return (
        <header className="my-10 text-center flex flex-col items-center  max-w-2xl w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
                Design Your Dream Adventure
            </h1>
            <p className="mt-3 text-sm md:text-lg text-foreground dark:text-secondary-foreground">
                Your perfect trip starts here. Share your preferences, and let us curate an experience tailored just for you.
            </p>
        </header>
    )
}

export default Header