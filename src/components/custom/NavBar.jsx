import React from 'react'
import { Button } from '../ui/button'

const NavBar = () => {
    return (
        <div className='p-1 pr-2 shadow-sm border flex justify-between items-center'>
            <img
                className='h-20 w-20'
                src="/logo-transparent.png"
                alt="Go Wanderlust"
            />
            <Button>Get Started</Button>
        </div>
    )
}

export default NavBar