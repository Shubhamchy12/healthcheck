import React, { useState } from 'react';

function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <h1 className="logo">HealthCheck</h1>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav-link">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Tests</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
