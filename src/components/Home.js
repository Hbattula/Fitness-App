import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      
      <header className="header">
        <nav className="nav">
          <div className="nav-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user-profile/overview">User Profile</Link>
            <Link to="/Login">Logout</Link>
          </div>
        </nav>
      </header>

  
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Fitness App</h1>
          <p>Your personal fitness companion</p>
          <Link to="/services" className="cta-button">Get Started</Link>
        </div>
      </section>


      <main className="main">
        <Outlet />
      </main>


      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Fitness App</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            <a href="https://x.com/i/flow/login"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
