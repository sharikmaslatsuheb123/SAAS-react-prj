// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Welcome to Our App!</h1>
        <p className="lead mt-3">
          Your one-stop solution for all your needs. Join us to explore amazing features and stay connected.
        </p>
        <div className="mt-4">
          <Link to="/signup" className="btn btn-primary me-2">Get Started</Link>
          <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
        </div>
      </div>
      
      <div className="mt-5">
        <h2>Features</h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User Profiles</h5>
                <p className="card-text">Create your profile and manage your personal information.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Community Connections</h5>
                <p className="card-text">Engage with others and stay connected with ease.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">Our team is here to help you anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h2>Get in Touch</h2>
        <p>Have questions? <Link to="/contact">Contact us</Link> today and we’d be happy to help!</p>
      </div>
    </div>
  );
};

export default Home;
