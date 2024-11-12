import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ courseName: '', mode: 'Online' });
  const navigate = useNavigate();
  const isAuthenticated = true; // Set to `false` to test redirection

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin'); // Redirect to signin if not authenticated
    }
  }, [isAuthenticated, navigate]);

  // Sample orders data
  useEffect(() => {
    const sampleOrders = [
      { id: 1, courseName: 'React Basics', mode: 'Online', date: '2024-11-10', status: 'In Progress' },
      { id: 2, courseName: 'Advanced JavaScript', mode: 'Offline', date: '2024-11-01', status: 'Completed' },
    ];
    setOrders(sampleOrders);
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  // Handle new order submission
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: orders.length + 1,
      ...newOrder,
      date: new Date().toISOString().split('T')[0],
      status: 'In Progress',
    };
    setOrders([...orders, order]);
    setNewOrder({ courseName: '', mode: 'Online' });
  };

  // Handle tracking and canceling orders
  const handleTrack = (orderId) => {
    alert(`Tracking order ${orderId}`);
  };

  const handleCancel = (orderId) => {
    const confirmed = window.confirm('Are you sure you want to cancel this order?');
    if (confirmed) {
      setOrders(orders.filter((order) => order.id !== orderId));
    }
  };

  return (
    <div className="order-container">
      <h2>Your Orders</h2>

      {/* Order Form */}
      <form onSubmit={handleOrderSubmit} className="order-form">
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={newOrder.courseName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mode:
          <select name="mode" value={newOrder.mode} onChange={handleInputChange}>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </label>
        <button type="submit">Place Order</button>
      </form>

      {/* Orders List */}
      {orders.length > 0 ? (
        <table className="order-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Mode</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.courseName}</td>
                <td>{order.mode}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleTrack(order.id)}>Track</button>
                  {order.status === 'In Progress' && (
                    <button onClick={() => handleCancel(order.id)}>Cancel</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  );
};

export default Orders;

