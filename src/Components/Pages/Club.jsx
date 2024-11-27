import React from "react";
import "./Club.css";
import WebDevelopImg from "../Assets/webdevelop.jpg";
import DataScienceImg from "../Assets/datascience.jpg";
import AIImg from "../Assets/AI.jpg";

const Clubs = () => {
  const clubs = [
    { name: "Web Development Club", description: "Learn and build projects in HTML, CSS, and JavaScript.", img: WebDevelopImg },
    { name: "Data Science Club", description: "Dive into Python, R, and data visualization techniques.", img: DataScienceImg },
    { name: "AI Enthusiasts", description: "Explore machine learning and artificial intelligence.", img: AIImg },
  ];

  return (
    <div className="clubs-container">
      <h1 className="clubs-header">Explore Our Clubs</h1>
      <p className="clubs-description">
        Join clubs tailored to your interests. Learn, collaborate, and grow with other learners in your field.
      </p>

      <div className="clubs-list">
        {clubs.map((club, index) => (
          <div className="club-card" key={index}>
            <img src={club.img} alt={club.name} className="club-image" />
            <h2 className="club-name">{club.name}</h2>
            <p className="club-description">{club.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
