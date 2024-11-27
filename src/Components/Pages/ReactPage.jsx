import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const ReactPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>React Concepts</span>
      </nav>

      <div className="header-section">
        <h1>React Concepts</h1>
        <p className="subtitle">Dive into React to build modern, dynamic web applications.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Components</h2>
          <p>Understand functional and class components, along with props and state.</p>
        </div>

        <div className="concept">
          <h2>2. Hooks</h2>
          <p>Learn about `useState`, `useEffect`, `useContext`, and custom hooks.</p>
        </div>

        <div className="concept">
          <h2>3. JSX Syntax</h2>
          <p>Explore how to write HTML-like code in JavaScript using JSX.</p>
        </div>

        <div className="concept">
          <h2>4. State Management</h2>
          <p>Learn state management techniques using Context API and libraries like Redux.</p>
        </div>

        <div className="concept">
          <h2>5. React Router</h2>
          <p>Implement dynamic routing with React Router for single-page applications.</p>
        </div>
      </div>
    </div>
  );
};

export default ReactPage;
