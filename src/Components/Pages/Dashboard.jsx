import React, { useState } from 'react';
import { useData } from '../UserContext/DataContext';
import { useUser } from '../UserContext/UserProvider';
import './Dashboard.css'; 
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  const { itemsByUser, addItem, deleteItem, increaseQty, decreaseQty } = useData();
  const { user } = useUser(); 
  const userId = user?.email; 
  const [newItem, setNewItem] = useState({ name: '', qty: 1 });

  const userItems = itemsByUser[userId] || []; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.qty > 0) {
      addItem(userId, newItem);
      setNewItem({ name: '', qty: 1 });
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="dashboard-content">
        <div className="dashboard-container container mt-5 p-4">
          <h1 className="dashboard-title text-center mb-4">Dashboard</h1>
          <form onSubmit={handleAddItem} className="mb-4">
            <div className="row g-3 align-items-center">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Item Name"
                  name="name"
                  value={newItem.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  min="1"
                  required
                />
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-lg btn-primary w-100">Add Item</button>
              </div>
            </div>
          </form>

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
              {userItems.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <div className="quantity-control d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary me-2"
                        onClick={() => decreaseQty(userId, item.id)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary ms-2"
                        onClick={() => increaseQty(userId, item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteItem(userId, item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {userItems.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-3">No items added.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;