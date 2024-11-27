// Footer.js
import React from 'react';
import './Footer.css'; // Custom CSS for footer styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo or Brand Name */}
        <div className="footer-logo">
          <h2>E-Learn</h2>
        </div>

        {/* Navigation Links */}
        {/* <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div> */}

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>Email: info@ELearn.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024-2025 E-Learn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
