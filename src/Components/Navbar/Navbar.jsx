import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for the Navbar


const Navbar = () => {
  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    const userData = {
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      email: localStorage.getItem('email'),
    };
    return userData.userId && userData.userName && userData.email ? userData : null;
  });

  const [activeTab, setActiveTab] = useState('/');
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  // Update user state if localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const userData = {
        userId: localStorage.getItem('userId'),
        userName: localStorage.getItem('userName'),
        email: localStorage.getItem('email'),
      };
      setUser(userData.userId && userData.userName && userData.email ? userData : null);
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleActiveTab = (tab) => setActiveTab(tab);

  const getLinkClass = useMemo(
    () => (path) => `nav-link ${activeTab === path ? 'active' : ''}`,
    [activeTab]
  );

  const logout = () => {
    // Clear user data from localStorage and reset user state
    localStorage.clear();
    setUser(null); // Reset the user state after logout
    navigate('/signin');
  };

  // const handleDashboardNavigation = () => {
  //   navigate('/dashboard');
  // };

  return (
    <div className="navbar-container fixed-top">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link
                className={getLinkClass(user ? '/dashboard' : '/')}
                to={user ? '/dashboard' : '/'}
                onClick={() => handleActiveTab(user ? '/dashboard' : '/')}
              >
                {user ? 'Dashboard' : 'Home'}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={getLinkClass('/contact')}
                to="/contact"
                onClick={() => handleActiveTab('/contact')}
              >
                Contact Us
              </Link>
            </li>

            {/* Right-aligned items (Sign In / Sign Up / Hello User / Logout) */}
            <div className="nav-item ms-auto">
              {user ? (
                <>
                  <span className="nav-link">Hello, {user.userName}</span>
                  <button className="btn btn-link nav-link" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>

        {showToast && (
          <div
            className="toast position-fixed bottom-0 end-0 m-3 show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Welcome!</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              />
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
