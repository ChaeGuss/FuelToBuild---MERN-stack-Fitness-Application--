// Navbar.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // We'll style the navbar with this file
import { gsap } from 'gsap';

const Navbar = () => {
const navRef = useRef(null);

useEffect(() => {
  
  gsap.fromTo(
    navRef.current,
    { y: '-30%', opacity: 1 },
    {
      y: '0%',
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
      delay: 1.5,
    }
  );

}, []);

  return (
    <nav className="navbar-container" ref={navRef}>
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
