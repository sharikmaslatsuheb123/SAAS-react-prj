import React from 'react';
import './ServicePage.css';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  return (
    <div className="service-page-card">
      <div className="service-page-body">
        {/* Docs Section */}
        <div className="service-section">
          <div className="service-section-left">
            <h2 className="service-section-title">Docs</h2>
            <p className="service-section-description">
              Find definitions, code syntax, and more -- or contribute your own code documentation.
            </p>
            <Link className="service-link">View all docs → </Link>
            <Link className="service-link">Contribute to docs → </Link>
          </div>
          <div className="service-section-right service-columns">
            <ul className="service-column">
              <li><Link to="/docs/c">C</Link></li>
              <li><Link to="/docs/cpp">C++</Link></li>
              <li><Link to="/docs/css">CSS</Link></li>
              <li><Link to="/docs/git">Git</Link></li>
            </ul>
            <ul className="service-column">
              <li><Link to="/docs/html">HTML</Link></li>
              <li><Link to="/docs/java">Java</Link></li>
              <li><Link to="/docs/javascript">JavaScript</Link></li>
              <li><Link to="/docs/php">PHP</Link></li>
            </ul>
            <ul className="service-column">
              <li><Link to="/docs/python">Python</Link></li>
              <li><Link to="/docs/react">React</Link></li>
              <li><Link to="/docs/sql">SQL</Link></li>
              <li><Link to="/docs/uiux">UI/UX</Link></li>
            </ul>
          </div>

        </div>

        {/* Learning & Practice Tools Section */}
        <div className="service-section">
          <div className="service-section-left">
            <h2 className="service-section-title">Learning & practice tools</h2>
          </div>
          <div className="service-section-right service-columns">
            <ul className="service-column">
              <li>
                <strong>Articles</strong>
                <p>Learn about technical 
                  concepts.</p>
              </li>
              <li>
                <strong>Cheatsheets</strong>
                <p>Review concepts from your courses.</p>
              </li>
            </ul>
            <ul className="service-column">
              <li>
                <strong>Code challenges</strong>
                <p>Test your knowledge and prep for interviews.</p>
              </li>
              <li>
                <strong>Projects</strong>
                <p>Practice and build your portfolio.</p>
              </li>
            </ul>
            <ul className="service-column">
              <li>
                <strong>Videos</strong>
                <p>Watch tutorials, project walkthroughs, and more.</p>
              </li>
              <li>
                <strong>Workspaces</strong>
                <p>Build and share projects in your browser.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Inspiration & Career Section */}
        <div className="service-section">
          <div className="service-section-left">
            <h2 className="service-section-title">Inspiration & career</h2>
            <Link className="service-link">View all blog topics → </Link>
          </div>
          <div className="service-section-right service-columns">
            <ul className="service-column">
              <li>
                <strong>Career advice</strong>
                <p>Get answers to questions about coding careers.</p>
              </li>
              <li>
                <strong>Learning tips</strong>
                <p>Learn where to start and how to stay motivated.</p>
              </li>
            </ul>
            <ul className="service-column">
              <li>
                <strong>Job-readiness checker <span className="new-badge">New</span></strong>
                <p>Analyze your compatibility with tech roles using AI.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicePage;
