import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loading from '../../components/Loading/Loading';
import './Home.css';

export default function Home({ movieDetails }) {
  const [movies, setMovies] = useState(null);

  async function getMovies() {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=1aae03b407215dcad7efb5adb518119b'
    );
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-wrapper py-4">
      <div className="container">
        
        {/* Hero Header Section */}
        <div className="hero-section text-center text-md-start mb-4">
          <div className="trending-accent">
            <i className="bi bi-fire"></i>
            <span>Weekly Trending</span>
          </div>
          <h1 className="hero-title mb-2">
            Explore <span>Trending Movies</span>
          </h1>
          <p className="hero-subtitle mb-0">
            Discover the most popular movies this week, stay updated with recent blockbusters and top-rated cinema.
          </p>
        </div>

        {/* Movies Grid */}
        <div className="row g-4">
          {movies ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movieDetails={movie} />
            ))
          ) : (
            <div className="col-12">
              <Loading />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}