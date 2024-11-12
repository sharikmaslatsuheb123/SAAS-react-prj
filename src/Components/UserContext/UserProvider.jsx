
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    // Retrieve users from localStorage 
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [
      // { email: 'saeed@gmail.com', password: '45678', name: 'Saeed' },
      // { email: 'aftab@gmail.com', password: '12345', name: 'Aftab' },
    ];
  });

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      navigate('/dashboard'); // Redirect to dashboard after login
      return true;
    } else {
      alert('Invalid credentials');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/'); // Redirect to home after logout
  };

  const signup = (newUser) => {
    const userExists = users.some((u) => u.email === newUser.email);
    if (userExists) {
      alert('User already exists with this email');
    } else {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Sign up successful');
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
