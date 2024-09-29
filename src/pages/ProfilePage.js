import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    eduEmailVerified: true,
    role: 'Regular User',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState(userData);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Update user data (in a real app, you'd also update the backend)
    setUserData(formState);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormState(userData);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1>User Profile</h1>
        {isEditing ? (
          <div className="profile-info">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            {/* Include other editable fields as necessary */}
            <button className="save-btn" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="profile-info">
            <p>
              <strong>Name:</strong> {userData.name}
              {userData.eduEmailVerified && (
                <span className="verified-badge" title="Verified Email">
                  ✔️
                </span>
              )}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Role:</strong> {userData.role}
            </p>
            {/* Display other user information as needed */}
            <button className="edit-profile-btn" onClick={handleEditClick}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
