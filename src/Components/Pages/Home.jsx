import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import studlap1 from "../Assets/laopt1.jpg"; // Image to be used
// import career from '../Assets/career-interest.png'; // Image for the left side of the page

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center">
        <h1 className='text-title'>Welcome to LearnHub!</h1>
        <p className="lead mt-3">
          Your one-stop solution for all your online learning needs. Join us to explore amazing courses and stay connected with experts.
        </p>
        <div className="mt-4">
          <Link to="/signup" className="btn btn-primary me-2">Get Started</Link>
          <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
        </div>
      </div>

      {/* Image Section - Career Image (left-aligned) */}
      {/* <div className="career-image mt-5">
        <div className="career-image-container">
          <img src={career} alt="Career Interest" className="img-fluid" />
        </div>
      </div> */}

      {/* Image Section - Laptop Image */}
      <div className="image-section mt-5">
        <div className="image-container">
          <img src={studlap1} alt="Laptop 1" className="img-fluid" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-5">
        <h2 className='feature-title'>Features</h2>
        <div className="row mt-4">
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

      {/* Footer Section */}
      <div className="mt-5 text-center">
        <h2>Get in Touch</h2>
        <p>
          Have questions? <Link to="/contact">Contact us</Link> today and we’d be happy to help!
        </p>
      </div>
    </div>
  );
};

export default Home;
