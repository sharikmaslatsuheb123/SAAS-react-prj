import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext/UserProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('/');
  const { user, logout } = useUser();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const toastTimer = setTimeout(() => setShowToast(true), 3000); // Show toast after 3 seconds

    const hideToastTimer = setTimeout(() => setShowToast(false), 8000); // Hide toast after 8 seconds

    return () => {
      clearTimeout(toastTimer);
      clearTimeout(hideToastTimer);
    };
  }, []);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const getLinkClass = (path) => `nav-link ${activeTab === path ? 'active' : ''}`;

  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <Link className={getLinkClass('/')} to="/" onClick={() => handleActiveTab('/')}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/contact')} to="/contact" onClick={() => handleActiveTab('/contact')}>
              Contact Us
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className={getLinkClass('/service')} to="/service" onClick={() => handleActiveTab('/service')}>
              Services
            </Link>
          </li> */}
          {user ? (
            <li className="nav-item ms-auto d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              <span className="nav-link">Hello, {user.name}</span>
              <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="toast position-fixed bottom-0 end-0 m-3 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header ">
            <strong className="me-auto">Welcome!</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowToast(false)}
              aria-label="Close"
              style={{ color: 'red' }}
            ></button>
          </div>
          <div className="toast-body">
            Welcome to our app! Explore our features and enjoy your experience.
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
