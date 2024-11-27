import { createContext, useContext, useState, useEffect } from 'react';
import { getItems, addItem, deleteItem } from '../Services/dashboardservice';
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



  return (
    <DataContext.Provider value={{ itemsByUser, addNewItem, deleteUserItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
