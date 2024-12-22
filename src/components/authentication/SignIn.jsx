import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { auth, googleProvider } from '../../service/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { Button } from '../ui/button';
import LoadingSpinner from '../LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return user ? (
    <div className='flex items-center gap-3'>
      {/* User Avatar */}
      <img
        src={user.photoURL}
        alt={user.displayName || 'User'}
        className='h-10 w-10 rounded-full'
      />

      {/* User Name */}
      <span className='text-sm font-medium'>{user.displayName}</span>

      {/* My Trips Button */}
      <Button variant='secondary' onClick={() => navigate('/my-trips')}>
        My Trips
      </Button>

      {/* Logout Button */}
      <Button variant='secondary' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  ) : (
    // Google Sign-In Button
    <Button variant='primary' onClick={handleGoogleSignIn}>
      Sign In with Google
    </Button>
  );
};

export default SignIn;
