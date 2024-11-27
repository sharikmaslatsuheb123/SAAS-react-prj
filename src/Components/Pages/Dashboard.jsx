import React, { useState, useEffect, useCallback } from 'react';
import { addItem, getUserById, updateItem, deleteItem } from '../Services/dashboardservice'; // Assuming `updateItem` and `deleteItem` are defined in the service
import './Dashboard.css';

const Dashboard = () => {
  const [userItems, setUserItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', qty: 1 });
  const [editItem, setEditItem] = useState({ id: '', name: '', description: '', qty: 1 });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const userId = localStorage.getItem('userId'); // Get userId from localStorage

  // Fetch user items from the backend
  const fetchUserItems = useCallback(() => {
    if (userId) {
      getUserById(userId)
        .then((data) => {
          console.log("Fetched items:", data); // Log the response to check
          if (data) {
            setUserItems(data); // Update state with the items from the API
          }
        })
        .catch((error) => {
          console.error('Error fetching user items:', error);
          setUserItems([]); // Fallback to empty array in case of error
        });
    }
  }, [userId]);

  // useEffect to fetch user items whenever userId changes or on initial load
  useEffect(() => {
    if (userId) {
      fetchUserItems(); // Call the optimized fetch function
    }
  }, [userId, fetchUserItems]);

  // Handle adding new item
  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItem.name && newItem.qty > 0) {
      try {
        const response = await addItem(userId, newItem);
        if (response && response.item) {
          setNewItem({ name: '', description: '', qty: 1 });
          fetchUserItems();
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  // Handle input change for adding new item
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: name === 'qty' ? Number(value) : value,
    }));
  };

  // Handle input change for editing an item
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prev) => ({
      ...prev,
      [name]: name === 'qty' ? Number(value) : value,
    }));
  };

  // Open the edit modal with the item data
  const openEditModal = (item) => {
    setEditItem({
      id: item.id,
      name: item.item_name,
      description: item.description,
      qty: item.quantity,
    });
    setShowEditModal(true);
  };

  // Handle updating an item
  const handleUpdateItem = async (e) => {
    e.preventDefault();
    try {
      const response = 
      await updateItem(editItem.id, editItem);
      if (response && response.item) {
        setShowEditModal(false);
        fetchUserItems();
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Open the delete confirmation modal
  const openDeleteModal = (itemId) => {
    console.log(itemId);
    setItemToDelete(itemId);
    setShowDeleteModal(true);
  };

  // Handle deleting an item
  const handleDeleteItem = async () => {
    try {
      await deleteItem(itemToDelete);
      setShowDeleteModal(false);
      fetchUserItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="dashboard-container mt-5 p-4">
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
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
          <div className="col-md-2">
            <button type="submit" className="btn btn-lg btn-primary w-100">
              Add Item
            </button>
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userItems.length > 0 ? (
            userItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.item_name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => openEditModal(item)}>
                    Update
                  </button>
                  <button className="btn btn-danger ms-2" onClick={() => openDeleteModal(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-3">
                No items added.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Edit Item</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)} aria-label="Close"></button>
              </div>
              <form onSubmit={handleUpdateItem}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Item Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={editItem.name}
                      onChange={handleEditInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      value={editItem.description}
                      onChange={handleEditInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      name="qty"
                      value={editItem.qty}
                      onChange={handleEditInputChange}
                      min="1"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this item?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteItem}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
