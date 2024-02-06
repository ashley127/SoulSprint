import React from 'react';
import { useUser } from '@clerk/clerk-react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};


const Header = () => {
  const { user } = useUser();

  const greeting = getGreeting();

  return (
    <div className="dashboard-header">
      <h1>{`${greeting}, ${user.firstName}!`}</h1>
      <p>Welcome back to your dashboard!</p>
    </div>
  );
};

export default Header;
