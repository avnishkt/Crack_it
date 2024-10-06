import React from 'react';
import img1 from "../components/assets/images/vivek.jpg"; // Adjust the path and filename as needed
import img2 from "../components/assets/images/vivek.jpg"; // Adjust the path and filename as needed
import img3 from "../components/assets/images/vivek.jpg"; // Adjust the path and filename as needed
import Card from '../components/Card';

export default function Teacher() {
  return (
    <div>
      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          <p className="section-subtitle">Teachers</p>
          <h2 className="h2 section-title">A good teacher is like a candle; it consumes itself to light the way for others</h2>

          <ul className="grid-list">
            <li>
              <Card 
                img={img1} 
                content="In a world of numbers, my math teacher unlocks the beauty of patterns and problem-solving, guiding us to find the solutions hidden within equations" 
                subject="Maths" 
                experience="3 years" 
                number="9695779756"
                Name="Vivek Tiwari"
              />
            </li>

            <li>
              <Card 
                img={img2} 
                content="With every experiment and theory, my physics teacher ignites our curiosity about the universe, helping us understand the fundamental laws that govern our world." 
                subject="Physics" 
                experience="4 years" 
                number="9695779756"
                Name="TeacherName"

              />
            </li>

            <li>
              <Card 
                img={img3} 
                content="With every experiment and theory, my physics teacher ignites our curiosity about the universe, helping us understand the fundamental laws that govern our world." 
                subject="chemistry" 
                experience="5 years" 
                number="9695779756"
                Name="TeacherName"

              />
            </li>
          </ul>

          <a href="#" className="btn has-before">
            <span className="span">Browse more Teachers</span>
          </a>
        </div>
      </section>
    </div>
  );
}
