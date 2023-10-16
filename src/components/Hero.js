import React from 'react';
import Link from './Link';
 import heroImage from '../assets/club.png';


function Hero() {
  // Note: For images in React, we'll use the import statement.
  // Replace 'path_to_image' with the actual path.

  return (
    <main className="hero-container">
      <div className="hero-image-container">
        <img src={heroImage} alt="Astronaut in the air" className="hero-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">WELCOME TO CLUBLY!</h1>
        <p className="hero-description">
          The personalized platform for UCD students is a convenient and efficient solution for discovering, organizing, and managing club information on campus. It streamlines the process, providing a centralized hub for students to explore clubs, stay updated with memberships and events, and communicate with club leaders.
        </p>
        <div className="hero-links">
          <Link href="https://www.google.com/forms/about/" target="_blank" rel="noopener">Join our Waitlist</Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
