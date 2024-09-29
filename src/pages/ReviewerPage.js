import React, { useState } from 'react';
import './ReviewerPage.css';

function ReviewerPage() {
  const [formData, setFormData] = useState({
    reviewerName: '',
    educationLevel: '',
    industryExperience: '',
    domain: '',
    marginalizedCommunity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Review Information Submitted Successfully!");
  };

  return (
    <div className="reviewer-page">
      <h1>Become a Reviewer</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reviewerName">Your Name:</label>
          <input
            type="text"
            id="reviewerName"
            name="reviewerName"
            value={formData.reviewerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="educationLevel">Education Level:</label>
          <input
            type="text"
            id="educationLevel"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="industryExperience">Industry Experience:</label>
          <input
            type="text"
            id="industryExperience"
            name="industryExperience"
            value={formData.industryExperience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="domain">Specialized Domain:</label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Domain</option>
            <option value="NLP">NLP</option>
            <option value="Computer Vision">Computer Vision</option>
            <option value="Robotics">Robotics</option>
            <option value="Fairness and Bias in ML">Fairness and Bias in ML</option>
            <option value="LGBTQ Activism">LGBTQ Activism</option>
            <option value="Feminism Activism">Feminism Activism</option>
            <option value="Disability Studies">Disability Studies</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="marginalizedCommunity">Marginalized Community Affiliation (Optional):</label>
          <input
            type="text"
            id="marginalizedCommunity"
            name="marginalizedCommunity"
            value={formData.marginalizedCommunity}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="submit-btn">Submit Review Credentials</button>
      </form>
    </div>
  );
}

export default ReviewerPage;
