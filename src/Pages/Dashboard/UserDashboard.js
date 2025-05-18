import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const useremail = useSelector((state) => state.user?.auth?.decoded?.email);

  return (
    <div>
      <h2>Welcome, {useremail}!</h2>
    </div>
  );
};

export default UserDashboard;