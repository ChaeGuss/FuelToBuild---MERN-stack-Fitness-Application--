// HomePage.js
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar.js';
import img1 from '../../src/Images/11478256.png';
import '../../src/pages/HomePage.css'
import { gsap } from 'gsap';

const HomePage = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null); 
  const imgRef = useRef(null);
  const btnRef = useRef(null);

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
    
    gsap.fromTo(
      textRef.current,
      { y: '10%', opacity: 0 },
      {
        y: '-110%',
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.8,
      }
    );

    gsap.fromTo(
      imgRef.current,
      { y: '-10%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5,
      }
    );

    gsap.fromTo(
      btnRef.current,
      { x: '-30%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.1,
      }
    );

  }, []);

  return (
    <div className='body'>
      <Navbar />
      <div className="homepage-container">
        <div className='landing'>
          <div className="image-container">
            <img
              src={img1} // Replace with the path to your image
              alt="Fitness"
              ref={imgRef}
            />
            <button className="cta-button" ref={btnRef}>Get Started</button>
          </div>
          <div className="text-container">
            <h1  ref={textRef}>Fuel To Build</h1>
          </div>
          <div className="marquee-container"  ref={marqueeRef}>
            <div className='marquee-part'>
            <div className="marquee">
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↩</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↪</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↩</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↪</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↩</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↪</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↩</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↪</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↩</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↪</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↩</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
          <div className="marquee" >
            <span>↪</span>
          </div>
          <div className="marquee" >
            <span>Train Smart</span>
          </div>
            </div>
        </div>
          
          
        </div>
        <section className='sec-section'>
          <div>
          <h2>Programs to Transform You</h2>
          <p>Discover workouts, meal plans, and more!</p>
          </div>
        </section>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      
    </div>

    
  );
};

export default HomePage;
