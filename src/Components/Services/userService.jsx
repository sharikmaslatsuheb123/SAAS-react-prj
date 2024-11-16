// userService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users'; // Update with your backend URL

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data; // return user data or a token
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// export const signupUser = async (user) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/signup`, user);
//     return response.data; // return user data after successful signup
//   } catch (error) {
//     console.error('Error signing up user:', error);
//     throw error;
//   }
// };
export const signupUser = async (user) => {
  console.log('Sending user:', user); // Debug: Log the payload
  try {
      const response = await axios.post(`${BASE_URL}/signup`, user);
      return response.data;
  } catch (error) {
      if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
      }
      throw error;
  }
};


