// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  // Function to close the navbar when the window is resized
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
      <button className="toggle-btn" onClick={toggleNavbar}>
        Toggle
      </button>
      <ul>
        <li><a href="./src/pages/Home">Home</a></li>
        <li><a href="./src/pages/CollegeQuizzes">College Quizzes</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
