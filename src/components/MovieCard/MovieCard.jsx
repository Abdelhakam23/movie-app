import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router';

export default function MovieCard({ movieDetails }) {
  // TMDB Image Base URL
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const { id, poster_path, title, overview, media_type, release_date, vote_average, vote_count} = movieDetails;


  return (
    <section className="col-md-6 col-lg-4 col-xl-3 my-4">
      <div className="movie-card h-100">
        
        {/* Poster Wrapper */}
        <div className="poster-wrapper">
          
          {/* Media Badge */}
          <span className="media-badge">
            {media_type}
          </span>

          {/* Rating Badge */}
          <span className="vote-badge d-flex align-items-center gap-1">
            <i className="bi bi-star-fill"></i>
            {vote_average.toFixed(1)}
          </span>

          {/* Poster Image */}
          <img 
            src={`${imageBaseUrl}${poster_path}`} 
            alt={title} 
            className="poster-img" 
          />

          {/* Hover Overlay */}
          <div className="card-overlay">
            <h6 className="text-white fw-bold mb-1">{title}</h6>
            <p className="overview-text mb-3">
              {overview}
            </p>
            <Link to={`/movie/${id}`} className="btn btn-danger btn-sm w-100 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-play-circle-fill"></i> View Details
            </Link>
          </div>

        </div>

        {/* Card Static Bottom Info */}
        <div className="card-details">
          <h5 className="movie-title" title={title}>
            {title}
          </h5>
          <div className="d-flex align-items-center justify-content-between movie-date">
            <span>
              <i className="bi bi-calendar3 me-1"></i>
              {new Date(release_date).getFullYear()}
            </span>
            <span>
              <i className="bi bi-people-fill me-1"></i>
              {vote_count}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}