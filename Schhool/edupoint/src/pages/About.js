import React from 'react';
import aboutBanner from "../components/assets/images/about-banner.jpg";
import aboutShape1 from "../components/assets/images/logo.png";
import aboutShape2 from "../components/assets/images/about-shape-2.svg";
import aboutShape3 from "../components/assets/images/logo.png";
import aboutShape4 from "../components/assets/images/about-shape-4.svg";

export default function About() {
  return (
    <div>
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <div className="img-holder" style={{ '--width': '520px', '--height': '370px' }}>
              <img
                src={aboutBanner}
                width="520"
                height="370"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>

            <img src={aboutShape1} width="360" height="420" loading="lazy" alt="shape 1" className="shape about-shape-1" />
            <img src={aboutShape2} width="371" height="220" loading="lazy" alt="shape 2" className="shape about-shape-2" />
            <img src={aboutShape3} width="722" height="528" loading="lazy" alt="shape 3" className="shape about-shape-3" />
          </figure>

          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
              Over 10 Years in <span className="span">High-quality learning</span> for  Development
            </h2>
            <p className="section-text">
            Education Point is a renowned coaching institute celebrated for its exceptional results and high-quality classes. With a team of experienced teachers boasting over 5 years of expertise in their respective subjects, Education Point offers both offline and online learning options to cater to the needs of all students. Whether you are preparing for competitive exams or looking to strengthen your academic foundation, Education Point provides a comprehensive learning experience with proven success
            </p>

            <ul className="about-list">
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Expert Teacher</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">youtube Learning</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Best Teacher</span>
              </li>
            </ul>

            <img src={aboutShape4} width="100" height="100" loading="lazy" alt="shape 4" className="shape about-shape-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
