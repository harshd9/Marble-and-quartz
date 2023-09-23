import React from 'react';
import './About.css'; // Import your CSS file

function About() {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About Us</h1>
      </header>
      <div className="about-content">
        <img src="../images/Travel.jpg" alt="Travelers" className="about-image" />
        <div className="about-text">
          <h2>Welcome to Our World of Adventure</h2>
          <p>
            We are passionate about travel and dedicated to providing you with the best travel
            experiences. With our team of experts, we curate unforgettable journeys to exotic
            destinations, ensuring every trip is an adventure of a lifetime.
          </p>
          <p>
            Our mission is to connect you with the beauty of the world, from serene beaches to
            majestic mountains. Whether you seek relaxation, exploration, or cultural immersion,
            we have the perfect journey waiting for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
