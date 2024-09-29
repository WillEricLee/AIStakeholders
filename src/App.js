import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';
import ModelPage from './pages/ModelPage';
import PublisherPage from './pages/PublisherPage';
import ReviewerPage from './pages/ReviewerPage';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage
import NavBar from './components/NavBar';
import './App.css';

function App() {
  // Use the custom layout logic to show/hide NavBar
  return (
    <Router>
      <Layout>
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
function Layout({ children }) {
  const location = useLocation();
  const isLandingPage = location.pathname === '/'; // Check if it's the landing page

  return (
    <div>
      {/* Render NavBar only if it's not the landing page */}
      {!isLandingPage && <NavBar />}
      {children}
    </div>
  );
}

export default App;
