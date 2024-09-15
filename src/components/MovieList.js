import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movies/p');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/movies/${id}`);
      setMovies(movies.filter(movie => movie._id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      await axios.put(`/api/movies/${id}`, { title, description, availableSeats, price });
      setMovies(movies.map(movie =>
        movie._id === id ? { ...movie, title, description, availableSeats, price } : movie
      ));
      setEditMovie(null);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      {movies.map(movie => (
        <div key={movie._id} className="movie-card">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>Seats: {movie.availableSeats}</p>
          <p>Price: ${movie.price}</p>
          <button onClick={() => handleDelete(movie._id)}>Delete</button>
          <button onClick={() => setEditMovie(movie)}>Edit</button>
        </div>
      ))}

      {editMovie && (
        <div className="edit-form">
          <h2>Edit Movie</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleEdit(editMovie._id); }}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Available Seats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <button type="submit">Update Movie</button>
            <button onClick={() => setEditMovie(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieList;
