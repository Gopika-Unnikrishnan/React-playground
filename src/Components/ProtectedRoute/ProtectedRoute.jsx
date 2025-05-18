import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const token = useSelector((state) => state.user.auth.token) || localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (requireAdmin && decoded.role !== 'admin') {
      return <Navigate to="/not-authorized" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
