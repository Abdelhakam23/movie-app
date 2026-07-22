import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-wrapper text-center my-5">
      
      {/* Icon with Glowing Pulse */}
      <div className="mb-3">
        <i className="bi bi-film film-icon-pulse"></i>
      </div>

      {/* Cinema Spinner */}
      <div className="cinema-spinner mb-3"></div>

      {/* Text */}
      <p className="loading-text m-0">
        Loading movies, please wait...
      </p>

    </div>
  );
}