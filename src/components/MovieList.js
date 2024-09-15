import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div className="movie-container">
      <h2>Available Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Theater:</strong> {movie.theater}</p>
            <button>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
