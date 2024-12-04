import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Services/userService';
import './commonStyle.css';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = await loginUser(formData.email, formData.password);
    if (isLoggedIn) {
      localStorage.setItem('userId', isLoggedIn.userId);
      localStorage.setItem('userName', isLoggedIn.userName);
      localStorage.setItem('email', isLoggedIn.email);
      window.dispatchEvent(new Event('storage'));
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In Clicked');
  };

  const handleLinkedInSignIn = () => {
    console.log('LinkedIn Sign-In Clicked');
  };

  return (
    <div className="background-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <h3 className="text-center mb-4">Sign In</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit} className="mb-4">
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
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-outline-danger w-100 mb-2 d-flex align-items-center justify-content-center"
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                  alt="Google logo"
                  style={{ width: '20px', marginRight: '10px' }}
                />
                Sign In with Google
              </button>
              <button
                className="btn btn-outline-info w-100 mb-2 d-flex align-items-center justify-content-center"
                onClick={handleLinkedInSignIn}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn logo"
                  style={{ width: '20px', marginRight: '10px' }}
                />
                Sign In with LinkedIn
              </button>
            </div>
            <div className="text-center mt-3">
              <small>Don’t have an account? <a href="/signup">Sign Up</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
