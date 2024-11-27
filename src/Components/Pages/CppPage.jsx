import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const CppPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>C++ Programming</span>
      </nav>

      <div className="header-section">
        <h1>C++ Programming Concepts</h1>
        <p className="subtitle">Master the powerful features of C++ programming.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Object-Oriented Programming (OOP)</h2>
          <p>Learn about classes, objects, inheritance, polymorphism, and encapsulation.</p>
        </div>

        <div className="concept">
          <h2>2. Standard Template Library (STL)</h2>
          <p>Explore the STL, including vectors, maps, sets, and algorithms.</p>
        </div>

        <div className="concept">
          <h2>3. Pointers and References</h2>
          <p>Understand advanced memory management using pointers and references.</p>
        </div>

        <div className="concept">
          <h2>4. File Handling</h2>
          <p>Work with file streams to read and write data to files.</p>
        </div>

        <div className="concept">
          <h2>5. Exception Handling</h2>
          <p>Learn how to manage runtime errors using try, catch, and throw keywords.</p>
        </div>
      </div>
    </div>
  );
};

export default CppPage;
