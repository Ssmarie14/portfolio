import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'bootstrap';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-header">
        <h1 className="landing-title">Welcome to Sam's Web Universe</h1>
        <p className="landing-subtitle">Where Design Meets Innovation</p>
      </div>
      <div className="landing-content">
        <p className="landing-description">
          Embark on a journey through a kaleidoscope of creativity, where pixels dance to the rhythm of innovation and lines converge to sculpt digital dreams.
        </p>
        <button className="landing-button">Explore Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
