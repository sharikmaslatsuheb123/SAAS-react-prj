import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../Services/userService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect to dashboard if user is logged in
    }
  }, [user, navigate]);

  const login = async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      setUser(userData);
      return true;
    } catch (err) {
      setError('Invalid credentials');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/'); // Redirect to home
  };

  const signup = async (newUser) => {
    try {
      const userData = await signupUser(newUser);
      setUser(userData);
      alert('Sign up successful');
      navigate('/signin');
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

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
