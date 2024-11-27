import React from "react";
import "./CodeCrew.css";

const CodeCrew = () => {
  const crewData = [
    {
      id: 1,
      name: "Michael Wiltfong",
      location: "Ottawa, Canada",
      image: "https://via.placeholder.com/120", // Replace with real image URL
      message:
        "The connections and friendships forged through the Code Crew create a powerful network that enriches your life and career, making it a truly gratifying experience.",
    },
    {
      id: 2,
      name: "Christine Belzie",
      location: "Middletown, New York",
      image: "https://via.placeholder.com/120", // Replace with real image URL
      message:
        "Being a part of Code Crew has been a great experience. I met wonderful people in this community who broaden my understanding of tech.",
    },
    {
      id: 3,
      name: "John Doe",
      location: "San Francisco, USA",
      image: "https://via.placeholder.com/120", // Replace with real image URL
      message:
        "I learned iOS from Codecademy, and I want to help others to learn and share my knowledge with them to make their experiences as beautiful as mine.",
    },
    {
      id: 4,
      name: "Jane Smith",
      location: "London, UK",
      image: "https://via.placeholder.com/120", // Replace with real image URL
      message:
        "I’m loving connecting with people all over the world, supporting them, and being supported in my coding journey. Being part of Code Crew is helping me so much in my job search.",
    },
  ];

  return (
    <div className="codecrew-container">
      <h2 className="title">Hear from the crew</h2>
      <div className="crew-grid">
        {crewData.map((crew) => (
          <div key={crew.id} className="crew-card">
            <img src={crew.image} alt={crew.name} className="crew-image" />
            <p className="message">"{crew.message}"</p>
            <h4 className="crew-name">{crew.name}</h4>
            <p className="location">{crew.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeCrew;
