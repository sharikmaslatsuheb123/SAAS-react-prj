import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const PhpPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>PHP Programming</span>
      </nav>

      <div className="header-section">
        <h1>PHP Programming Concepts</h1>
        <p className="subtitle">Learn PHP to build powerful server-side applications.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Variables and Data Types</h2>
          <p>Understand PHP variables, constants, and common data types.</p>
        </div>

        <div className="concept">
          <h2>2. Forms and Data Handling</h2>
          <p>Learn how to handle form submissions and process user inputs.</p>
        </div>

        <div className="concept">
          <h2>3. Sessions and Cookies</h2>
          <p>Master managing sessions and cookies for user authentication.</p>
        </div>

        <div className="concept">
          <h2>4. MySQL Integration</h2>
          <p>Learn how to connect PHP to MySQL for database operations.</p>
        </div>

        <div className="concept">
          <h2>5. File Handling</h2>
          <p>Understand how to upload, read, and manipulate files in PHP.</p>
        </div>
      </div>
    </div>
  );
};

export default PhpPage;
