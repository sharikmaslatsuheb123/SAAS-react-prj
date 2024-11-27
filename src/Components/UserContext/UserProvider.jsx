import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Update global user state
    localStorage.setItem('userId', userData.userId);
    localStorage.setItem('userName', userData.userName);
    localStorage.setItem('email', userData.email);
  };

  const logout = () => {
    setUser(null); // Clear user state
    localStorage.clear(); // Clear all local storage
  };

  useEffect(() => {
    // Load user from localStorage on initial render
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email');
    if (userId && userName && email) {
      setUser({ userId, userName, email });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
