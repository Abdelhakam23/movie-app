import React from 'react';
import { Link } from 'react-router';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="notfound-card mx-auto p-4">
        
        {/* Cinema Icon */}
        <div className="mb-3">
          <i className="bi bi-camera-reels cinema-icon-glow"></i>
        </div>

        {/* 404 Error Code */}
        <h1 className="error-code mb-2">404</h1>

        {/* Title */}
        <h2 className="fw-bold text-white mb-3 fs-3">
          Lost in the Cinema?
        </h2>

        {/* Description */}
        <p className="text-secondary small mb-4 px-md-4">
          The page or movie reel you are looking for doesn't exist or has been moved to another theater.
        </p>

        {/* Back to Home Button */}
        <div>
          <Link to="/" className="btn-home-red">
            <i className="bi bi-house-door-fill"></i>
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}