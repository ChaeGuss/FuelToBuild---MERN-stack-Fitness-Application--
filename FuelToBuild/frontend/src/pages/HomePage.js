// HomePage.js
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar.js';
import img1 from '../../src/Images/11478256.png';
import '../../src/pages/HomePage.css'
import { gsap } from 'gsap';

const HomePage = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElements = marqueeRef.current.children;

    // Create an infinite scrolling animation
    gsap.to(marqueeElements, {
      xPercent: -100,
      repeat: -1, 
      duration: 5, 
      ease: 'linear', 
      stagger: {
        each: 0, 
        repeat: -1,
      },
    }).totalProgress(0.5);

  }, []);

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
          <div className="marquee-container"  ref={marqueeRef}>
            <div className='marquee-part'>
            <div className="marquee">
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>

            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
