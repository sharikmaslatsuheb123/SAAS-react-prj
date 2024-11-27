import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const JavascriptPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>JavaScript Programming</span>
      </nav>

      <div className="header-section">
        <h1>JavaScript Programming Concepts</h1>
        <p className="subtitle">Unlock the power of JavaScript for dynamic web applications.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. DOM Manipulation</h2>
          <p>Learn how to manipulate the Document Object Model dynamically.</p>
        </div>

        <div className="concept">
          <h2>2. Functions</h2>
          <p>Understand function declarations, arrow functions, and callbacks.</p>
        </div>

        <div className="concept">
          <h2>3. Asynchronous Programming</h2>
          <p>Explore promises, async/await, and handling API calls.</p>
        </div>

        <div className="concept">
          <h2>4. ES6+ Features</h2>
          <p>Learn about modern features like destructuring, template literals, and modules.</p>
        </div>

        <div className="concept">
          <h2>5. Events</h2>
          <p>Understand event listeners, event bubbling, and delegation.</p>
        </div>
      </div>
    </div>
  );
};

export default JavascriptPage;
