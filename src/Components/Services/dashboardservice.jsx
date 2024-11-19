import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/dashboard'; // Update with your backend URL

export const getItems = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// export const addItem = async (userId, item) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/${userId}`, item);
//     return response.data; // return the added item
//   } catch (error) {
//     console.error('Error adding item:', error);
//     throw error;
//   }
// };

export const addItem = async (userId, item) => {
  try {
    
    const response = await axios.post(`${BASE_URL}`, {
      userId: userId,
      itemName: item.name,
      description: item.description || '', // Optional description
      quantity: item.qty,
    });
    return response.data; // Assuming the API returns the added item
  } catch (error) {
    console.error('Error in addItem:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

export const updateItemQuantity = async (userId, itemId, quantity) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${userId}/${itemId}`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Error updating item quantity:', error);
    throw error;
  }
};


