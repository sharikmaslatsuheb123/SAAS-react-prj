import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserProvider';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user } = useUser();
  const userId = user?.email; 

  const [itemsByUser, setItemsByUser] = useState(() => {
    const savedData = localStorage.getItem('itemsByUser');
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem('itemsByUser', JSON.stringify(itemsByUser));
  }, [itemsByUser]);

  const addItem = (userId, newItem) => {
    setItemsByUser((prevItemsByUser) => {
      if (prevItemsByUser[userId]) {
        // If userId already exists, add the new item to the existing array
        return {
          ...prevItemsByUser,
          [userId]: [...prevItemsByUser[userId], { ...newItem, id: Date.now() }]
        };
      } else {
        // If userId does not exist, create  with the new item
        return {
          ...prevItemsByUser,
          [userId]: [{ ...newItem, id: Date.now() }]
        };
      }
    });
  };
  

  const deleteItem = (userId, id) => {
    setItemsByUser((prevItemsByUser) => {
      if (prevItemsByUser[userId]) {
        return {
          ...prevItemsByUser,
          [userId]: prevItemsByUser[userId].filter((item) => item.id !== id)
        };
      } else {
        return prevItemsByUser;
      }
    });
  };
  
  const increaseQty = (userId, id) => {
    setItemsByUser((prevItemsByUser) => {
      if (prevItemsByUser[userId]) {
        return {
          ...prevItemsByUser,
          [userId]: prevItemsByUser[userId].map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        };
      } else {
        return prevItemsByUser;
      }
    });
  };
  
  const decreaseQty = (userId, id) => {
    setItemsByUser((prevItemsByUser) => {
      if (prevItemsByUser[userId]) {
        return {
          ...prevItemsByUser,
          [userId]: prevItemsByUser[userId].map((item) =>
            item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
          )
        };
      } else {
        return prevItemsByUser;
      }
    });
  };
  

  return (
    <DataContext.Provider value={{ itemsByUser, addItem, deleteItem, increaseQty, decreaseQty }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
