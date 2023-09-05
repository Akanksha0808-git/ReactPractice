import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">Your Logo</span>
        {/* Hamburger Icon */}
        <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Navbar Items */}
      <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        <li>Bollywood</li>
        <li>Hollywood</li>
        <li>Food</li>
        <li>Fitness</li>
        <li>Technology</li>
      </ul>
    </nav>
  );
};

export default Navbar;
