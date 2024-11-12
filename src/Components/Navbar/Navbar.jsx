import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext/UserProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('/');
  const { user, logout } = useUser();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const toastTimer = setTimeout(() => setShowToast(true), 3000);
    const hideToastTimer = setTimeout(() => setShowToast(false), 8000);

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
    <div className="navbar-container fixed-top">
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
            {user ? (
              <li className="nav-item ms-auto d-flex align-items-center">
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

        {showToast && (
          <div className="toast position-fixed bottom-0 end-0 m-3 show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <strong className="me-auto">Welcome!</strong>
              <button type="button" className="btn-close" onClick={() => setShowToast(false)} aria-label="Close"></button>
            </div>
            <div className="toast-body">
              Welcome to our app! Explore our features and enjoy your experience.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
