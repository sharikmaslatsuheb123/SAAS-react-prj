// src/services/dashboardService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/dashboard';

// Get Items for a User
export const getItems = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Add a New Item to the Dashboard
export const addItem = async (itemData) => {
  try {
    const response = await axios.post(BASE_URL, itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Delete an Item from the Dashboard
export const deleteItem = async (itemId) => {
  try {
    if (!itemId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid Item ID');
    }
    const response = await axios.delete(`${BASE_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error.response ? error.response.data : error.message);
    throw error;
  }
};
