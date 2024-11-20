import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext/UserProvider';
import { addItem, getUserById } from '../Services/dashboardservice';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useUser();
  const userId = user?.userId; // Ensure `user?.id` is defined in your UserContext
  const [userItems, setUserItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', qty: 1 });

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItem.name && newItem.qty > 0) {
      try {
        console.log(userId);
        const response = await addItem(userId, newItem); // Add item to backend
        const addedItem = {
          id: response.item.id,
          userId: response.item.userId,
          itemName: response.item.itemName,
          description: response.item.description,
          quantity: response.item.quantity,
        };
        // Instead of directly setting the item in the state, we will fetch the updated list
        setNewItem({ name: '', description: '', qty: 1 }); // Reset the input fields
        // Refetch the user's items after adding the new item
        fetchUserItems(userId);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  // Fetch user items from the backend
  const fetchUserItems = (userId) => {
    if (userId) {
      console.log('Fetching user items for userId:', userId); // Log userId for debugging

      getUserById(userId)
        .then((data) => {
          console.log('Fetched user items:', data); // Log the fetched data
          if (data && Array.isArray(data.items)) {
            setUserItems(data.items); // Set the fetched items
          } else {
            console.error('Invalid data format:', data); // Log invalid data format
            setUserItems([]); // Set to empty array if data format is incorrect
          }
        })
        .catch((error) => {
          console.error('Error fetching user items:', error); // Log the error
          setUserItems([]); // Fallback to empty array in case of error
        });
    }
  };

  // useEffect to fetch user items whenever userId changes
  useEffect(() => {
    if (userId) {
      fetchUserItems(userId);
    }
  }, [userId]); // Dependency on userId to re-fetch if it changes

  return (
    <div className="dashboard-container container mt-5 p-4">
      <h1 className="dashboard-title text-center mb-4">Dashboard</h1>

      {/* Form to add new item */}
      <form onSubmit={handleAddItem} className="mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Item Name"
              name="name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Quantity"
              name="qty"
              value={newItem.qty}
              onChange={(e) => setNewItem({ ...newItem, qty: Number(e.target.value) })}
              min="1"
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-lg btn-primary w-100">Add Item</button>
          </div>
        </div>
      </form>

      {/* Display the items in a table */}
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {userItems.length > 0 ? (
            userItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-3">No items added.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
