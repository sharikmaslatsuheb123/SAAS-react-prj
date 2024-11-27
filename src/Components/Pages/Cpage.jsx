import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const Cpage = () => {
  return (
    <div className="c-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>C Programming</span>
      </nav>

      <div className="header-section">
        <h1>C Programming Concepts</h1>
        <p className="subtitle">Learn and master the building blocks of C programming.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Data Types</h2>
          <p>Understand different data types like `int`, `float`, `char`, and their usage in C.</p>
        </div>

        <div className="concept">
          <h2>2. Variables and Constants</h2>
          <p>Learn about declaring variables, initializing them, and using constants in your programs.</p>
        </div>

        <div className="concept">
          <h2>3. Control Structures</h2>
          <p>Master if-else statements, loops (for, while, do-while), and switch-case to control program flow.</p>
        </div>

        <div className="concept">
          <h2>4. Functions</h2>
          <p>Understand function declaration, definition, and the concept of function calls and arguments.</p>
        </div>

        <div className="concept">
          <h2>5. Arrays</h2>
          <p>Learn to define and manipulate arrays, including multidimensional arrays in C.</p>
        </div>

        <div className="concept">
          <h2>6. Pointers</h2>
          <p>Discover pointers, memory addresses, and their use in dynamic memory allocation and functions.</p>
        </div>

        <div className="concept">
          <h2>7. Structures</h2>
          <p>Explore how to group related data into a single unit using structures in C.</p>
        </div>

        <div className="concept">
          <h2>8. File Handling</h2>
          <p>Learn to open, read, write, and manage files effectively in C programming.</p>
        </div>

        <div className="concept">
          <h2>9. Dynamic Memory Allocation</h2>
          <p>Understand dynamic memory allocation techniques using `malloc`, `calloc`, and `free`.</p>
        </div>

        <div className="concept">
          <h2>10. Recursion</h2>
          <p>Master recursion and solve complex problems through recursive function calls.</p>
        </div>
      </div>
    </div>
  );
};

export default Cpage;
