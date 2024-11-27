import React from 'react';
import { Link } from 'react-router-dom';
import './Cpage.css';

const SqlPage = () => {
  return (
    <div className="c-page">
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>SQL Concepts</span>
      </nav>

      <div className="header-section">
        <h1>SQL Concepts</h1>
        <p className="subtitle">Learn SQL to manage and query relational databases effectively.</p>
      </div>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. Basic Queries</h2>
          <p>Learn SELECT, INSERT, UPDATE, and DELETE operations.</p>
        </div>

        <div className="concept">
          <h2>2. Joins</h2>
          <p>Understand INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.</p>
        </div>

        <div className="concept">
          <h2>3. Indexes</h2>
          <p>Explore how to use indexes to optimize query performance.</p>
        </div>

        <div className="concept">
          <h2>4. Stored Procedures</h2>
          <p>Learn how to write reusable SQL procedures and functions.</p>
        </div>

        <div className="concept">
          <h2>5. Transactions</h2>
          <p>Master ACID properties and how to manage transactions effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default SqlPage;
