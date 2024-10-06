import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img from "../components/assets/images/course-1.jpg"
export default function Card({ img, content, subject, experience, number ,Name}) {
  return (
    <div>
      <div className="course-card">
        <figure className="card-banner img-holder" style={{ '--width': '370px', '--height': '220px' }}>
          <img src={img} width="370" height="220" loading="lazy" alt={content} className="img-cover" />
        </figure>

        <div className="abs-badge">
          <span className="span">🥇 {experience ? experience : ""}</span>
        </div>

        <div className="card-content">
          <span className="badge">{subject}</span>

          <h3 className="h3">
            <Link to={`/course/${content}`} className="card-title">{content}</Link> {/* Link to course detail */}
          </h3>

          <div className="wrapper">
            <div className="rating-wrapper">
              {/* Add rating icons here if needed */}
            </div>
            <p className="rating-text">(5.0/7 Rating)</p>
          </div>

          <data className="price" value="29">{Name}</data>

          <ul className="card-meta-list">
            <li className="card-meta-item">
              <span className="span">{number}</span>
            </li>
            <li className="card-meta-item">
              <span className="span">More Details</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
