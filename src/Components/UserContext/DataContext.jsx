import { createContext, useContext, useState, useEffect } from 'react';
import { getItems, addItem, deleteItem,updateItemQuantity } from '../Services/dashboardservice';
import { useUser } from './UserProvider';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user } = useUser();
  const userId = user?.id;  // Assuming `userId` is available after login

  const [itemsByUser, setItemsByUser] = useState([]);

  useEffect(() => {
    if (userId) {
      const fetchItems = async () => {
        try {
          const items = await getItems(userId);
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
      const addedItem = await addItem(userId, newItem);
      setItemsByUser((prevItems) => [...prevItems, addedItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const deleteUserItem = async (itemId) => {
    try {
      await deleteItem(userId, itemId);
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
    <DataContext.Provider value={{ itemsByUser, addNewItem, deleteUserItem,increaseItemQty,decreaseItemQty }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
