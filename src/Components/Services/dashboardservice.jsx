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

export const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

export const updateItem = async (itemId, editedItem) => {
  try {
    const response = await axios.put(`${BASE_URL}/${itemId}`, { editedItem });
    return response.data;
  } catch (error) {
    console.error('Error updating item quantity:', error);
    throw error;
  }
};

export const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/${userId}`)
    .then(response => {
      return response.data; // Return the data from the response
    })
    .catch(error => {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
      } else {
        console.error('Error message:', error.message);
      }
      throw error; // Rethrow the error so it can be handled elsewhere
    });
};
