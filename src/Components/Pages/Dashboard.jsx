import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems, addItem, deleteItem, updateItemQuantity } from '../Services/dashboardservice'; // Import the services
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve logged-in user data from localStorage
  const userId = user?.email; // Assuming the user ID is the email

  const [userItems, setUserItems] = useState([]); // State for items
  const [newItem, setNewItem] = useState({ name: '', qty: 1 }); // State for new item

  // Fetch items when the component is mounted or when userId changes
  useEffect(() => {
    if (!userId) {
      navigate('/signin'); // Redirect to signin if no userId
    } else {
      fetchItems(); // Fetch items from the backend if userId is present
    }
  }, [userId, navigate]);

  const fetchItems = async () => {
    try {
      const items = await getItems(userId); // Fetch items from the backend
      setUserItems(items); // Update the userItems state
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItem.name && newItem.qty > 0) {
      try {
        const addedItem = await addItem(userId, newItem); // Add item to backend
        setUserItems([...userItems, addedItem]); // Add item to the state
        setNewItem({ name: '', qty: 1 }); // Reset the input fields
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(userId, itemId); // Delete item from backend
      setUserItems(userItems.filter(item => item.id !== itemId)); // Remove item from the state
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      const updatedItem = await updateItemQuantity(userId, itemId, quantity); // Update item quantity in backend
      setUserItems(userItems.map(item => 
        item.id === itemId ? { ...item, qty: updatedItem.qty } : item
      )); // Update the state with the new quantity
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  return (
    <div className="dashboard-container container mt-5 p-4">
      <h1 className="dashboard-title text-center mb-4">Dashboard</h1>
      
      {/* Form to add new item */}
      <form onSubmit={handleAddItem} className="mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-5">
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
          <div className="col-md-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Quantity"
              name="qty"
              value={newItem.qty}
              onChange={(e) => setNewItem({ ...newItem, qty: e.target.value })}
              min="1"
              required
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-lg btn-primary w-100">Add Item</button>
          </div>
        </div>
      </form>

      {/* Display the items in a table */}
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Item Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userItems.length > 0 ? (
            userItems.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <div className="quantity-control d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => handleUpdateQuantity(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.qty}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => handleUpdateQuantity(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
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
