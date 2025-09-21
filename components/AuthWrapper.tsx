"use client";

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/config';
import ProgressTracker from './ProgressTracker';
import Login from './Login';

const AuthWrapper = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listener checks with Firebase whenever the user's login status changes.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user if logged in, or null if logged out
      setLoading(false); // Stop showing the loading message
    });

    // Clean up the listener when the component is removed
    return () => unsubscribe();
  }, []);

  // Show a loading screen while Firebase is checking the auth status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="text-white font-semibold text-xl animate-pulse">
          Loading Your Workspace...
        </div>
      </div>
    );
  }

  // If loading is finished, check if a user is logged in.
  // If yes, show the ProgressTracker. If no, show the Login page.
  return user ? <ProgressTracker user={user} /> : <Login />;
};

export default AuthWrapper;