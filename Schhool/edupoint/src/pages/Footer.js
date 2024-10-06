import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/assets/images/logo.png'; // Update the path as needed
import footerBg from '../components/assets/images/footer-bg.png'; // Update the path as needed

export default function Footer() {
  return (
    <div>
      <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="footer-top section">
          <div className="container grid-list">

            <div className="footer-brand">
              <Link to="/" className="logo">
                <img src={logo} width="162" height="50" alt="EduWeb logo" />
              </Link>

              <p className="footer-brand-text">
                The best coaching around you.
              </p>

              <div className="wrapper">
                <span className="span">Add:</span>
                <address className="address">70-80 Pryagraj Uttar Pradesh India</address>
              </div>

              <div className="wrapper">
                <span className="span">Call:</span>
                <a href="tel:+011234567890" className="footer-link">+01 123 4567 890</a>
              </div>

              <div className="wrapper">
                <span className="span">Email:</span>
                <a href="mailto:avnishkt16@gmail.com" className="footer-link">educationPoint.com</a>
              </div>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Online Platform</p>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/courses" className="footer-link">Courses</Link>
              </li>
              <li>
                <Link to="/instructor" className="footer-link">Instructor</Link>
              </li>
              <li>
                <Link to="/events" className="footer-link">Events</Link>
              </li>
              <li>
                <Link to="/instructor-profile" className="footer-link">Instructor Profile</Link>
              </li>
              <li>
                <Link to="/purchase-guide" className="footer-link">Purchase Guide</Link>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Links</p>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">Gallery</Link>
              </li>
              <li>
                <Link to="/news" className="footer-link">News & Articles</Link>
              </li>
              <li>
                <Link to="/faqs" className="footer-link">FAQ's</Link>
              </li>
              <li>
                <Link to="/sign-in" className="footer-link">Sign In/Registration</Link>
              </li>
              <li>
                <Link to="/coming-soon" className="footer-link">Coming Soon</Link>
              </li>
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Contacts</p>
              <p className="footer-list-text">
                Enter your email address to register for our newsletter subscription.
              </p>

              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Your email" required className="input-field" />
                <button type="submit" className="btn has-before">
                  <span className="span">Subscribe</span>
                  {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                </button>
              </form>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    {/* Uncomment and replace with icon if needed */}
                    {/* <ion-icon name="logo-facebook"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-instagram"></ion-icon> */}
                    <p>c</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-twitter"></ion-icon> */}
                    <p>b</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-youtube"></ion-icon> */}
                    <p>a</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              Copyright 2024 All Rights Reserved by <Link to="#" className="copyright-link">Avnishkt</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
