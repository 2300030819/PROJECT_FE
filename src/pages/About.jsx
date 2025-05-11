import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-hero">
        <h1>Welcome to BookNest</h1>
        <p>Your trusted partner for smooth and secure hotel bookings worldwide.</p>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          At BookNest, we’re passionate about travel and hospitality. We provide an intuitive platform that connects travelers 
          with hotels of all types — from luxury resorts to budget-friendly stays.
        </p>

        <h2>Our Mission</h2>
        <p>
          To simplify hotel booking with real-time availability, transparent pricing, and verified guest reviews — so you can 
          travel with peace of mind.
        </p>

        <h2>Why Choose BookNest?</h2>
        <ul>
          <li>✔ Instant hotel search and booking</li>
          <li>✔ Secure payment and confirmation</li>
          <li>✔ 24/7 multilingual customer support</li>
          <li>✔ Personalized suggestions based on your preferences</li>
          <li>✔ Exclusive deals and discounts</li>
        </ul>

        <p className="closing-note">
          Whether it's business or leisure, BookNest is here to make every journey comfortable and memorable.
        </p>
      </div>
    </section>
  );
};

export default About;