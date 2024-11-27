import React from "react";
import "./Events.css";

const events = [
  {
    title: "Web Dev Club | Weekly Accountability Meeting",
    date: "Nov 25",
    time: "10:30-11:30pm",
    description:
      "Come join us for a weekly session for us to focus on our individual progress. Share what you've been...",
    platform: "YouTube",
    attendees: 33,
  },
  {
    title: "Abu Dhabi Club | Study Session",
    date: "Nov 25",
    time: "10:30pm-12:30am",
    description:
      "This session is a safe and inclusive space to meet others who are studying, stay accountable, and be...",
    platform: "YouTube",
    attendees: 4,
  },
  {
    title: "London Club | Tuesday Study Session",
    date: "Nov 27",
    time: "12:30-2:30am",
    description:
      "This session is a safe space to meet other people studying, be accountable and present with...",
    platform: "YouTube",
    attendees: 16,
  },
  {
    title: "Codecademy Coding Hangout: Gratitude",
    date: "Nov 27, 2024",
    time: "11pm-12am",
    description:
      "Event Overview: Join us for a Codecademy Coding Hangout! This casual, open-to-all session is the...",
    platform: "YouTube",
    attendees: 95,
  },
  {
    title: "Javascript Coding support Hour",
    date: "Nov 27, 2024",
    time: "11pm-12am",
    description:
      "Event Overview: Join us for a Codecademy Coding Hangout! This casual, open-to-all session is the...",
    platform: "YouTube",
    attendees: 33,
  },
  {
    title: "Python Shield",
    date: "Nov 27, 2024",
    time: "11pm-12am",
    description:
      "Event Overview: Join us for a Codecademy Coding Hangout! This casual, open-to-all session is the...",
    platform: "YouTube",
    attendees: 75,
  },

];

const Events = () => {
  return (
    <div className="event-page">
      <div className="event-header">
        <h2>Upcoming Events</h2>
        <p>28 events</p>
      </div>

      <div className="event-filters">
        {/* Dropdown for Event Types */}
        <select className="filter-dropdown">
          <option value="all">All Event Types</option>
          <option value="career-growth">Career Growth</option>
          <option value="hackathon">Hackathon</option>
          <option value="networking">Networking</option>
          <option value="qa">Q&A</option>
        </select>

        {/* Dropdown for Subjects */}
        <select className="filter-dropdown">
          <option value="all">All Subjects</option>
          <option value="web-dev">Web Development</option>
          <option value="data-science">Data Science</option>
          <option value="soft-skills">Soft Skills</option>
          <option value="soft-skills">Interview prep</option>
        </select>

        {/* Dropdown for Languages */}
        <select className="filter-dropdown">
          <option value="all">All Languages</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="csharp">C#</option>
          <option value="html-css">HTML & CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="sql">SQL</option>
        </select>
      </div>

      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-card-header">
              <h3>{event.title}</h3>
            </div>
            <div className="event-card-body">
              <p className="event-date">
                📅 {event.date} | 🕒 {event.time}
              </p>
              <p className="event-description">{event.description}</p>
            </div>
            <div className="event-card-footer">
              <span>🎥 {event.platform}</span>
              <span>👥 {event.attendees}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
