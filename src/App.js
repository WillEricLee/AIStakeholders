import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';
import ModelPage from './pages/ModelPage';
import PublisherPage from './pages/PublisherPage';
import ReviewerPage from './pages/ReviewerPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/NavBar';
import './App.css';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App({ signOut }) {
  // Use the custom layout logic to show/hide NavBar
  return (
    <Router>
      <Layout signOut={signOut}>
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<EntryPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/model/:id" element={<ModelPage />} />
            <Route path="/publish" element={<PublisherPage />} />
            <Route path="/reviewer" element={<ReviewerPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

// Create a Layout component to conditionally render NavBar
function Layout({ children, signOut }) {
  const location = useLocation();
  const isLandingPage = location.pathname === '/'; // Check if it's the landing page

  return (
    <div>
      {/* Render NavBar only if it's not the landing page */}
      {!isLandingPage && (
        <>
          <NavBar />
          {/* Include the sign-out button in the NavBar or wherever appropriate */}
          <button onClick={signOut} style={{ float: 'right', margin: '10px' }}>
            Sign out
          </button>
        </>
      )}
      {children}
    </div>
  );
}

export default withAuthenticator(App);
