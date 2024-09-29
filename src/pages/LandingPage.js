import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="logo-container">
        <img src="/image.png" alt="VerifAI Logo" className="company-logo" />
        <h1 className="company-name">VerifAI</h1>
        <p className="company-description">
          ML, LLM Model Verifier / Certifier
        </p>
        <Link to="/login">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
