import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <img src="https://marketplace.canva.com/EAFonLhGegw/1/0/1600w/canva-fitness-badge.-sport-logo.-ncDS_d4Gbgc.jpg"  alt="FitShit Logo" className="logo" />
        <h1>fits-Hit</h1>
      </div>
      <nav>
        <Link to="/signup">Premium membership</Link>
      </nav>
    </header>
  );
}

export default Header;
