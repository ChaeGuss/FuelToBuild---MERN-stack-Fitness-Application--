// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // We'll style the navbar with this file

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <nav className='navbar'> 
            <div className="navbar-logo">
                <h2>FuelToBuild</h2>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/programs">Programs</Link></li>
            </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
