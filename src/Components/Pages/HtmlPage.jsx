import React from "react";
import { Link } from "react-router-dom";
import "./Cpage.css";

const HtmlPage = () => {
  return (
    <div className="html-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/docs">Docs</Link> &gt; <span>HTML</span>
      </nav>

      <h1>HTML Concepts</h1>
      <p>Explore the foundational concepts of HTML (HyperText Markup Language).</p>

      <div className="concepts-list">
        <div className="concept">
          <h2>1. HTML Basics</h2>
          <p>Understand the structure of HTML documents, including elements, attributes, and tags.</p>
        </div>

        <div className="concept">
          <h2>2. HTML Headings and Paragraphs</h2>
          <p>Learn how to use headings (`h1` to `h6`) and paragraphs (`p`) to format text.</p>
        </div>

        <div className="concept">
          <h2>3. Links and Anchor Tags</h2>
          <p>Create hyperlinks using the `a` tag to navigate between web pages or resources.</p>
        </div>

        <div className="concept">
          <h2>4. Images</h2>
          <p>Embed images into your webpage using the `img` tag and optimize them for web performance.</p>
        </div>

        <div className="concept">
          <h2>5. Lists</h2>
          <p>Understand ordered (`ol`) and unordered (`ul`) lists to display items in sequence or bullet points.</p>
        </div>

        <div className="concept">
          <h2>6. Forms</h2>
          <p>Learn how to create user input forms with elements like `input`, `textarea`, `select`, and `button`.</p>
        </div>

        <div className="concept">
          <h2>7. Tables</h2>
          <p>Understand how to organize data into rows and columns using the `table`, `tr`, `td`, and `th` tags.</p>
        </div>

        <div className="concept">
          <h2>8. Semantic Elements</h2>
          <p>Use semantic tags like `header`, `footer`, `article`, and `section` for better readability and SEO.</p>
        </div>

        <div className="concept">
          <h2>9. HTML5 Features</h2>
          <p>Explore new elements like `video`, `audio`, and `canvas` introduced in HTML5.</p>
        </div>

        <div className="concept">
          <h2>10. Accessibility</h2>
          <p>Ensure your website is accessible using `alt` attributes, ARIA roles, and semantic elements.</p>
        </div>
      </div>
    </div>
  );
};

export default HtmlPage;
