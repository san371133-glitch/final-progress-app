"use client";

import React from 'react';
// ProgressTracker component
import { User } from 'firebase/auth';

interface ProgressTrackerProps {
  user: User;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ user }) => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="text-white font-semibold text-xl">
        Welcome, {user.email}!
      </div>
    </div>
  );
};

export default ProgressTracker;
