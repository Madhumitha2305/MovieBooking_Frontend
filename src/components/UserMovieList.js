import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserMovieList = () => {
  const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/user-movies')
      .then((response) => {
        setUserMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user movies:', error);
      });
  }, []);

  return (
    <div className="movie-container">
      <h2>Your Favorite Movies</h2>
      <div className="movie-grid">
        {userMovies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Theater:</strong> {movie.theater}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMovieList;
