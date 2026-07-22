import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="movie-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
          
          {/* Brand & About */}
          <div className="col-lg-4 col-md-6">
            <a className="footer-brand d-flex align-items-center gap-2 mb-3" href="#">
              <i className="bi bi-play-btn-fill text-danger fs-4"></i>
              <span>CineScope</span>
            </a>
            <p className="pe-lg-4 text-secondary small">
              Your ultimate destination for movies and TV series. Watch trailers, explore trending shows, and stay updated with cinema news.
            </p>
            {/* Social Links */}
            <div className="d-flex align-items-center gap-2 mt-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV Series</a></li>
              <li><a href="#">Trending</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Genres</h5>
            <ul className="footer-links">
              <li><a href="#">Action</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Sci-Fi</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Stay Updated</h5>
            <p className="small text-secondary mb-3">Subscribe to get notifications about new releases.</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control form-control-sm bg-dark border-secondary text-white shadow-none" 
                placeholder="Enter your email" 
              />
              <button className="btn btn-danger btn-sm px-3 fw-semibold" type="button">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pt-3 small text-secondary">
          <p className="mb-2 mb-sm-0">&copy; {new Date().getFullYear()} CineScope. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none hover-white">Privacy Policy</a>
            <a href="#" className="text-secondary text-decoration-none hover-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}