import React, { useState } from 'react';
import { signupUser } from '../Services/userService'; // Import the signup service
import { useNavigate } from 'react-router-dom';
import '../Pages/./commonStyle.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '', // Updated from 'name' to 'username'
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const newUser = {
      username: formData.username, // Updated from 'name' to 'username'
      email: formData.email,
      password: formData.password,
    };
    try {
      await signupUser(newUser);  // Signup user
      setSuccessMessage('Signup successful! Redirecting to sign-in page...'); // Show success message
      setTimeout(() => {
        navigate('/signin');  // Redirect to sign-in page after 2 seconds
      }, 2000);
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <div className="background-container">
      <div className="container mt-5">
        <h3 className="text-center mb-4">Sign Up</h3>
        {successMessage && ( // Conditionally display success message
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <small>Already have an account? <a href="/signin">Sign In</a></small>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
