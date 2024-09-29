import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ModelPage.css';

function ModelPage() {
  const { id } = useParams();

  // For simplicity, we'll define the models array here as well.
  // In a real application, you'd fetch this data from a backend or global state.
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
        {
          reviewer: 'Bob',
          rating: 5,
          comment: 'Excellent accuracy and performance.',
        },
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
          {
            reviewer: 'Bob',
            rating: 5,
            comment: 'Excellent accuracy and performance.',
          },
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
          {
            reviewer: 'Bob',
            rating: 5,
            comment: 'Excellent accuracy and performance.',
          },
        ],
      },
      {
        id: 4,
        name: 'Model 1',
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
          {
            reviewer: 'Bob',
            rating: 5,
            comment: 'Excellent accuracy and performance.',
          },
        ],
      },
    // Add more models as needed
  ];

  // Find the model with the matching ID
  const model = models.find((m) => m.id === parseInt(id));

  if (!model) {
    return (
      <div className="model-page">
        <h2>Model not found</h2>
        <Link to="/home">
          <button className="back-home-btn">Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="model-page">
      <h1>{model.name}</h1>
      <p><strong>Description:</strong> {model.description}</p>
      <p><strong>Use Cases:</strong> {model.useCases}</p>
      <p><strong>Published Date:</strong> {model.publishedDate}</p>
      <h3>Benchmark Results:</h3>
      <ul>
        <li>Accuracy: {model.benchmarkResults.accuracy}</li>
        <li>Precision: {model.benchmarkResults.precision}</li>
        {/* Add more benchmark metrics as needed */}
      </ul>
      <h3>Top Users:</h3>
      <ul>
        {model.topUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      {model.reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p><strong>Reviewer:</strong> {review.reviewer}</p>
          <p><strong>Rating:</strong> {review.rating}/5</p>
          <p><strong>Comment:</strong> {review.comment}</p>
        </div>
      ))}
      <Link to="/home">
        <button className="back-home-btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default ModelPage;
