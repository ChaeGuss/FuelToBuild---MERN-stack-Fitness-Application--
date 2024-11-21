// HomePage.js
import React from 'react';
import Navbar from '../components/navbar.js';
import img1 from '../../src/Images/11478256.png';
import '../../src/pages/HomePage.css'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepage-container">
          <div className="image-container">
            <img
              src={img1} // Replace with the path to your image
              alt="Fitness"
            />
          </div>
          <div className="text-container">
            <h1>Fuel To Build</h1>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
