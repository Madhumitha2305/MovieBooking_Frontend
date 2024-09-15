import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminMovieManagement = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', theater: '' });

  useEffect(() => {
    axios.get('/api/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleDelete = (movieId) => {
    axios.delete(`/api/movies/${movieId}`)
      .then(() => {
        setMovies(movies.filter(movie => movie._id !== movieId));
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
      });
  };

  const handleUpdate = (movieId, updatedMovie) => {
    axios.put(`/api/movies/${movieId}`, updatedMovie)
      .then(() => {
        setMovies(movies.map(movie => (movie._id === movieId ? updatedMovie : movie)));
      })
      .catch((error) => {
        console.error('Error updating movie:', error);
      });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    axios.post('/api/movies', newMovie)
      .then((response) => {
        setMovies([...movies, response.data]);
        setNewMovie({ title: '', description: '', theater: '' });
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div className="movie-container">
      <h2>Manage Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Theater:</strong> {movie.theater}</p>
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
            <button onClick={() => handleUpdate(movie._id, movie)}>Update</button>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddMovie}>
        <h3>Add New Movie</h3>
        <input
          type="text"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          placeholder="Description"
          required
        />
        <input
          type="text"
          value={newMovie.theater}
          onChange={(e) => setNewMovie({ ...newMovie, theater: e.target.value })}
          placeholder="Theater"
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AdminMovieManagement;
