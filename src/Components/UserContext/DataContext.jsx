import React, { createContext, useContext, useState, useEffect } from 'react';
import { getItems, addItem, deleteItem, updateItemQuantity } from '../Services/dashboardservice'; // import item services
import { useUser } from './UserProvider';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user } = useUser();
  const userId = user?.email; 

  const [itemsByUser, setItemsByUser] = useState([]);

  // Fetch items when user logs in
  useEffect(() => {
    if (userId) {
      const fetchItems = async () => {
        try {
          const items = await getItems(userId); // Call the axios service to fetch items
          setItemsByUser(items);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };
      fetchItems();
    }
  }, [userId]);

  const addNewItem = async (newItem) => {
    try {
      const addedItem = await addItem(userId, newItem); // Call the axios service to add item
      setItemsByUser((prevItems) => [...prevItems, addedItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const deleteUserItem = async (itemId) => {
    try {
      await deleteItem(userId, itemId); // Call the axios service to delete item
      setItemsByUser((prevItems) => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const increaseItemQty = async (itemId) => {
    try {
      const updatedItem = await updateItemQuantity(userId, itemId, 'increase');
      setItemsByUser((prevItems) => prevItems.map(item => item.id === itemId ? updatedItem : item));
    } catch (error) {
      console.error('Error increasing item quantity:', error);
    }
  };

  const decreaseItemQty = async (itemId) => {
    try {
      const updatedItem = await updateItemQuantity(userId, itemId, 'decrease');
      setItemsByUser((prevItems) => prevItems.map(item => item.id === itemId ? updatedItem : item));
    } catch (error) {
      console.error('Error decreasing item quantity:', error);
    }
  };

  return (
    <DataContext.Provider value={{ itemsByUser, addNewItem, deleteUserItem, increaseItemQty, decreaseItemQty }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
