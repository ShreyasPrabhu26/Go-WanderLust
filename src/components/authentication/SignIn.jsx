import React, { useState } from 'react';
import { auth } from '../../service/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '../ui/button';

const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log('Signed in user:', result.user);
        } catch (error) {
            console.error('Error during Google Sign-In:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Button
                onClick={handleGoogleSignIn}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg"
                disabled={isLoading}
            >
                {isLoading ? 'Signing In...' : 'Sign in with Google'}
            </Button>
        </div>
    );
};

export default SignIn;
