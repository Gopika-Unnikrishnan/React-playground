import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'CLEAR_TOKEN' });
    localStorage.removeItem('token');
    navigate('/sign-in');
  }, []);

  return null; // or a "Logging out..." message
};

export default Logout;
