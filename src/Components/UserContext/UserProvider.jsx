import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../Services/userService'; // import the axios services

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const userData = await loginUser(email, password); // Call the axios login service
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
      navigate('/dashboard'); // Redirect to dashboard after login
      return true;
    } catch (err) {
      setError('Invalid credentials');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/'); // Redirect to home after logout
  };

  const signup = async (newUser) => {
    try {
      const userData = await signupUser(newUser); // Call the axios signup service
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Store new user in localStorage
      alert('Sign up successful');
      navigate('/signin'); // Redirect to sign-in after successful signup
    } catch (err) {
      setError('Error during sign-up');
    }
  };

  return (
    <UserContext.Provider value={{ user, error, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
