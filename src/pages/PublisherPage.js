import React, { useState } from 'react';
import './PublisherPage.css';

function PublisherPage() {
  const [formData, setFormData] = useState({
    publisherName: '',
    credentials: '',
    modelName: '',
    description: '',
    useCase: '',
    popularUsers: '',
    benchmarkScores: {
      accuracy: '',
      precision: '',
    }
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
    alert("Model Published Successfully!");
  };

  return (
    <div className="publisher-page">
      <h1>Publish Your Model</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="publisherName">Your Name:</label>
          <input
            type="text"
            id="publisherName"
            name="publisherName"
            value={formData.publisherName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="credentials">Credentials:</label>
          <input
            type="text"
            id="credentials"
            name="credentials"
            value={formData.credentials}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="modelName">Model Name:</label>
          <input
            type="text"
            id="modelName"
            name="modelName"
            value={formData.modelName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="useCase">Use Case:</label>
          <textarea
            id="useCase"
            name="useCase"
            value={formData.useCase}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="popularUsers">Popular Users:</label>
          <input
            type="text"
            id="popularUsers"
            name="popularUsers"
            value={formData.popularUsers}
            onChange={handleInputChange}
            placeholder="Comma-separated list"
          />
        </div>

        <div className="form-group">
          <label htmlFor="accuracy">Benchmark Score (Accuracy):</label>
          <input
            type="text"
            id="accuracy"
            name="accuracy"
            value={formData.benchmarkScores.accuracy}
            onChange={(e) =>
              setFormData({
                ...formData,
                benchmarkScores: { ...formData.benchmarkScores, accuracy: e.target.value }
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="precision">Benchmark Score (Precision):</label>
          <input
            type="text"
            id="precision"
            name="precision"
            value={formData.benchmarkScores.precision}
            onChange={(e) =>
              setFormData({
                ...formData,
                benchmarkScores: { ...formData.benchmarkScores, precision: e.target.value }
              })
            }
            required
          />
        </div>

        <button type="submit" className="publish-btn">Publish Model</button>
      </form>
    </div>
  );
}

export default PublisherPage;
