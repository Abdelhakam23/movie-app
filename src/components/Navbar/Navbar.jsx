import React from 'react';
import './Navbar.css';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark movie-nav sticky-top">
      <div className="container">
        
        {/* Brand */}
        <Link className="brand-logo d-flex align-items-center gap-2" to="/">
          <i className="bi bi-play-btn-fill text-danger"></i>
          <span>MovieApp</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#movieNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="movieNavbar">
          <ul className="navbar-nav me-auto ms-lg-4 gap-lg-3 my-2 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom active d-flex align-items-center gap-1" to="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-link-custom dropdown-toggle d-flex align-items-center gap-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-fire text-warning"></i> Trending
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow border-secondary">
                <li>
                  <a className="dropdown-item py-2" href="#">
                    <i className="bi bi-film me-2 text-danger"></i> Movies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item py-2" href="#">
                    <i className="bi bi-tv me-2 text-info"></i> TV Series
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Auth */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/login" className="btn-login">
              Log In
            </Link>
            <Link to="/signup" className="btn-signup">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}