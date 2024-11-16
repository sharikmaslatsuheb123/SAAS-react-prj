// src/services/userService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users';

// Login User
export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Signup User
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error.response ? error.response.data : error.message);
    throw error;
  }
};
