import React from "react";
import "./LearnerStories.css";
import learnimg1 from "../Assets/product_16.png"; // Imported image
import learnimg2 from "../Assets/product_22.png"; // Imported image
import learnimg3 from "../Assets/product_10.png"; // Imported image

const learnerStories = [
  {
    image: learnimg1, // Using the imported image here
    title: "How I Went from Hospitality Jobs to Software Engineer in 1 Year",
    date: "08/09/2024",
    timeToRead: "6 minutes",
    author: "Codecademy Team",
    description:
      "Today’s story is from Ben Cunningham, a 24-year-old Software Engineer at Commonwealth Bank of Australia, living in West Perth, Australia.",
  },
  {
    image: learnimg2,
    title: "Learning Python Had an Immense Impact on My Career as a Cancer Researcher",
    date: "07/17/2024",
    timeToRead: "6 minutes",
    author: "Codecademy Team",
    description:
      "Today’s story is from Joshua Lange, a 31-year-old Research Scientist at a biotech company, living in Stockholm, Sweden.",
  },
  {
    image: learnimg3,
    title: "How I Went from Management to Freelance Web Developer in 1.5 Years",
    date: "07/09/2024",
    timeToRead: "7 minutes",
    author: "Codecademy Team",
    description:
      "Today’s story is from Cambria Sullivan, a 36-year-old Freelance Web Developer living in Seattle, Washington.",
  },
];

const LearnerStories = () => {
  return (
    <div className="learner-stories-wrapper">
      <div className="learner-stories-container">
        {learnerStories.map((story, index) => (
          <div key={index} className="learner-card">
            <div className="card-header">
              <span className="badge">Learner Stories</span>
              <img src={story.image} alt="Learner" className="learner-image" />
            </div>
            <div className="card-body">
              <h3 className="story-title">{story.title}</h3>
              <div className="story-info">
                <span>{story.date}</span>
                <span className="divider">|</span>
                <span>{story.timeToRead}</span>
                <span className="divider">|</span>
                <span>By {story.author}</span>
              </div>
              <p className="story-description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnerStories;
