import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../components/assets/images/hero-shape-1.svg"; // Ensure the correct path and extension
import img2 from "../components/assets/images/hero-shape-2.png"; // Updated to use a different image
import Teacher from './Teacher';
import Stats from './Stats';

export default function HeroPage() {
  return (
    <div>
      <section 
        className="section hero has-bg-image" 
        id="home" 
        aria-label="home"
        style={{ backgroundImage: `url('./assets/images/hero-bg.svg')` }} // Use double curly braces for inline styles
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 section-title">
              The Best Coaching  <span className="span">EDUCATION POINT</span> for Learning
            </h1>

            <p className="hero-text">
            Join us and ignite your passion for learning—your journey to success starts here!.
            </p>

            <Link to="/courses" className="btn has-before"> {/* Changed to Link for routing */}
              <span className="span">Find courses</span>
            </Link>
          </div>

          <figure className="hero-banner">
            <div className="img-holder one" style={{ '--width': '270px', '--height': '300px' }}>
              <img src={img1} width="270" height="300" alt="hero banner" className="img-cover" />
            </div>

            <div className="img-holder two" style={{ '--width': '240px', '--height': '370px' }}>
              <img src={img2} width="240" height="370" alt="hero banner" className="img-cover" />
            </div>

            <img src={img1} width="380" height="190" alt="" className="shape hero-shape-1" />
            <img src={img2} width="622" height="551" alt="" className="shape hero-shape-2" />
          </figure>
        </div>
      </section>
      <Teacher></Teacher>
      <Stats></Stats>
    </div>
  );
}
