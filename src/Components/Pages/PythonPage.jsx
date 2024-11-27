import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const PythonPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>Python Programming</span>
      </nav>

      <div className="header-section">
        <h1>Python Programming Concepts</h1>
        <p className="subtitle">Explore the simplicity and versatility of Python.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Data Types</h2>
          <p>Learn about strings, lists, tuples, dictionaries, and their manipulations.</p>
        </div>

        <div className="concept">
          <h2>2. Control Structures</h2>
          <p>Master loops, if-else conditions, and switch-case alternatives.</p>
        </div>

        <div className="concept">
          <h2>3. Functions</h2>
          <p>Understand Python functions, lambda expressions, and decorators.</p>
        </div>

        <div className="concept">
          <h2>4. Modules and Packages</h2>
          <p>Organize your code with reusable modules and packages.</p>
        </div>

        <div className="concept">
          <h2>5. Object-Oriented Programming (OOP)</h2>
          <p>Learn about Python classes, inheritance, and polymorphism.</p>
        </div>
      </div>
    </div>
  );
};

export default PythonPage;
