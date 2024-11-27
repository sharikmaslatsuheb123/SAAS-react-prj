import React from "react";
import { FaGlobe, FaCalendarAlt, FaBookOpen, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Community.css";

const Community = () => {
  return (
    <div className="community-container">
      <h1 className="community-header">Welcome to the Community</h1>
      <p className="community-description">
        Connect, collaborate, and grow with our community offerings.
      </p>

      <div className="community-box">
        <Link to="/clubs" className="community-item">
          <FaGlobe className="community-icon" />
          <h2 className="community-title">Clubs</h2>
          <p className="community-info">
            Join clubs to meet people with similar interests.
          </p>
        </Link>

        <Link to="/events" className="community-item">
          <FaCalendarAlt className="community-icon" />
          <h2 className="community-title">Events</h2>
          <p className="community-info">
            Stay updated on workshops, webinars, and meetups.
          </p>
        </Link>

        <Link to="/learner-stories" className="community-item">
          <FaBookOpen className="community-icon" />
          <h2 className="community-title">Learner Stories</h2>
          <p className="community-info">
            Get inspired by learner achievements and share your journey.
          </p>
        </Link>

        <Link to="/code-crew" className="community-item">
          <FaUsers className="community-icon" />
          <h2 className="community-title">Code Crew</h2>
          <p className="community-info">
            Collaborate on projects and coding challenges.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Community;
