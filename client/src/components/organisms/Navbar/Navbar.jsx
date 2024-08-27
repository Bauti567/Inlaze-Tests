import React from 'react';
import './Navbar.css';
import NavLink from '../../atoms/NavLink/NavLink';


function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="logo-link">
        <img 
          src="/path-to-your-logo.svg" 
          alt="Logo" 
          className="logo" 
        />
      </a>
      <div className="nav-links">
        <NavLink href="/popular">Popular</NavLink>
        <NavLink href="/now-playing">Now Playing</NavLink>
        <NavLink href="/upcoming">Upcoming</NavLink>
        <NavLink href="/top-rated">Top Rated</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
        <NavLink href="/saved">Saved</NavLink>
      </div>
      <div className="nav-icons">
        <a href="#">
          <img src="/path-to-icon1.svg" alt="Icon 1" className="nav-icon" />
        </a>
        <a href="#">
          <img src="/path-to-icon2.svg" alt="Icon 2" className="nav-icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
