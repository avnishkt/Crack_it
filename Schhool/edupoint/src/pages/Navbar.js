import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../components/assets/images/logo.png"; // Ensure the correct path and extension

export default function Navbar() {
  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} width="162" height="50" alt="EduWeb logo" />
          </Link>

          <nav className="navbar" data-navbar>
            <div className="wrapper">
              <Link to="/" className="logo">
                <img src={logo} width="162" height="50" alt="EduWeb logo" />
              </Link>

              <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                {/* <ion-icon name="close-outline" aria-hidden="true"></ion-icon> */}
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link" data-nav-link>Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/teachers" className="navbar-link" data-nav-link>Teachers</Link>
              </li>
              <li className="navbar-item">
                <Link to="/courses" className="navbar-link" data-nav-link>Courses</Link>
              </li>
              <li className="navbar-item">
                <Link to="/youtube" className="navbar-link" data-nav-link>Youtube</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="navbar-link" data-nav-link>About</Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="header-action-btn" aria-label="toggle search" title="Search">
              {/* <ion-icon name="search-outline" aria-hidden="true"></ion-icon> */}
            </button>

            <button className="header-action-btn" aria-label="cart" title="Cart">
              {/* <ion-icon name="cart-outline" aria-hidden="true"></ion-icon> */}
              <span className="btn-badge">0</span>
            </button>

            <Link to="#" className="btn has-before">
              <span className="span">Try for free</span>
              {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
            </Link>

            <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
              {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon> */}
            </button>
          </div>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  );
}
