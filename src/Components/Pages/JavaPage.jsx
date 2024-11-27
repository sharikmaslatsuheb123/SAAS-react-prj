import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const JavaPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>Java Programming</span>
      </nav>

      <div className="header-section">
        <h1>Java Programming Concepts</h1>
        <p className="subtitle">Master Java for building robust, scalable applications.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Object-Oriented Programming (OOP)</h2>
          <p>Learn about classes, objects, inheritance, encapsulation, and polymorphism.</p>
        </div>

        <div className="concept">
          <h2>2. Multithreading</h2>
          <p>Understand thread creation, synchronization, and concurrency utilities.</p>
        </div>

        <div className="concept">
          <h2>3. Java Collections Framework</h2>
          <p>Explore ArrayList, HashMap, HashSet, LinkedList, and other collections.</p>
        </div>

        <div className="concept">
          <h2>4. Exception Handling</h2>
          <p>Master try-catch blocks, finally, and creating custom exceptions.</p>
        </div>

        <div className="concept">
          <h2>5. JDBC and Database Connectivity</h2>
          <p>Learn how to connect Java applications to relational databases using JDBC.</p>
        </div>
      </div>
    </div>
  );
};

export default JavaPage;
