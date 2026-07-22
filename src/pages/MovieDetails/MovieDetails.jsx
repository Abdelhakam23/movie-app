import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

export default function MovieDetails() {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  async function getMovieDetails() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1aae03b407215dcad7efb5adb518119b`,
    );

    const data = await response.json();
    setMovieDetails(data);
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      {movieDetails ? (
        <div
          className="details-hero d-flex align-items-center py-5"
          style={{
            backgroundImage: `url(${imageBaseUrl}${movieDetails.backdrop_path})`,
          }}
        >
          <div className="details-overlay"></div>

          <div className="container position-relative z-1 py-4">
            <div className="row g-4 align-items-center">
              {/* Poster Column */}
              <div className="col-md-5 col-lg-4">
                <div className="details-poster-wrapper">
                  <img
                    src={`${imageBaseUrl}${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className="details-poster"
                  />
                </div>
              </div>

              {/* Info Column */}
              <div className="col-md-7 col-lg-8 text-white">
                {/* Title & Tagline */}
                <h1 className="details-title mb-1">{movieDetails.title}</h1>
                {movieDetails.tagline && (
                  <p className="tagline-text mb-3">"{movieDetails.tagline}"</p>
                )}

                {/* Rating & Primary Specs */}
                <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                  <div className="d-flex align-items-center gap-1 bg-warning text-dark fw-bold px-3 py-1 rounded-pill fs-6">
                    <i className="bi bi-star-fill"></i>
                    <span>{movieDetails.vote_average.toFixed(1)}</span>
                    <span className="text-secondary fw-normal fs-7">
                      ({movieDetails.vote_count})
                    </span>
                  </div>

                  <span className="text-secondary">•</span>
                  <span className="text-light fw-medium">
                    <i className="bi bi-clock me-1 text-danger"></i>
                    {movieDetails.runtime } min
                  </span>

                  <span className="text-secondary">•</span>
                  <span className="text-light fw-medium">
                    <i className="bi bi-calendar3 me-1 text-danger"></i>{" "}
                    {movieDetails.release_date}
                  </span>
                </div>

                {/* Genres */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {movieDetails.genres?.map((genre) => (
                    <span key={genre.id} className="genre-badge">
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-2 text-white-50">Overview</h5>
                  <p className="lead fs-6 text-light opacity-90 lh-base">
                    {movieDetails.overview}
                  </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="row g-3 mb-4">
                  <div className="col-6 col-sm-4">
                    <div className="stat-box">
                      <div className="stat-label">Budget</div>
                      <div className="stat-value">{movieDetails.budget}</div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="stat-box">
                      <div className="stat-label">Revenue</div>
                      <div className="stat-value">{movieDetails.revenue}</div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="stat-box">
                      <div className="stat-label">Status</div>
                      <div className="stat-value">{movieDetails.status}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons & Companies */}
                <div className="d-flex flex-wrap align-items-center gap-3">
                  {movieDetails.homepage && (
                    <a
                      href={movieDetails.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger px-4 py-2 rounded-pill fw-semibold d-flex align-items-center gap-2"
                    >
                      <i className="bi bi-globe"></i> Official Website
                    </a>
                  )}

                  {/* Production Companies list */}
                  <div className="d-flex flex-wrap gap-2 ms-md-auto">
                    {movieDetails.production_companies?.map((comp) => (
                      <span key={comp.id} className="company-badge">
                        {comp.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
