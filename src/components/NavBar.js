import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCloudUploadAlt } from 'react-icons/fa'; // Import relevant icons
import { MdRateReview } from 'react-icons/md'; // Import Material Design icons
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo on the left */}
        <img src="/image.png" alt="VerifAI Logo" className="navbar-logo" />
      </div>
      <h1>Model Platform</h1>
      
      <div className="links">
        <Link to="/">Login/Sign Up</Link>
        <Link to="/home">Home</Link>
        <Link to="/publish">Publish Model</Link>
        <Link to="/reviewer">Become a Reviewer</Link> {/* Add link to ReviewerPage */}
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default NavBar;
