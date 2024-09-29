import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const models = [
    {
      id: 1,
      name: 'Image Classifier',
      description: 'Classify images into predefined categories.',
      useCases: 'Image recognition, object detection',
      publishedDate: '2023-10-01',
      benchmarkResults: {
        accuracy: '95%',
        precision: '93%',
      },
      topUsers: ['Company A', 'Company B'],
      reviews: [
        {
          reviewer: 'Alice',
          rating: 4,
          comment: 'Great model for image classification tasks.',
        },
        // Add more reviews as needed
      ],
    },
    {
      id: 2,
      name: 'Speech Classifier',
      description: 'Classify images into predefined categories.',
      useCases: 'Image recognition, object detection',
      publishedDate: '2023-10-01',
      benchmarkResults: {
        accuracy: '95%',
        precision: '93%',
      },
      topUsers: ['Company A', 'Company B'],
      reviews: [
        {
          reviewer: 'Alice',
          rating: 4,
          comment: 'Great model for image classification tasks.',
        },
        // Add more reviews as needed
      ],
    },
    {
      id: 3,
      name: 'Video Classifier',
      description: 'Classify images into predefined categories.',
      useCases: 'Image recognition, object detection',
      publishedDate: '2023-10-01',
      benchmarkResults: {
        accuracy: '95%',
        precision: '93%',
      },
      topUsers: ['Company A', 'Company B'],
      reviews: [
        {
          reviewer: 'Alice',
          rating: 4,
          comment: 'Great model for image classification tasks.',
        },
        // Add more reviews as needed
      ],
    },
    { id: 1, name: 'Model 1', description: 'This is Model 1' },
    { id: 2, name: 'Model 2', description: 'This is Model 2' },
    { id: 3, name: 'Model 3', description: 'This is Model 3' }
  ];

  return (
    <div className="home-page">
      <h1>Available Models</h1>
      <div className="model-list">
        {models.map((model) => (
          <div key={model.id} className="model-card">
            <h2>{model.name}</h2>
            <p>{model.description}</p>
            <Link to={`/model/${model.id}`}>
              <button className="view-details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
