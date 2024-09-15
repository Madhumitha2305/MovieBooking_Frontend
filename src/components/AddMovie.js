import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/movies', { title, description, availableSeats, price });
      // Optionally, redirect or show a success message
      alert('Movie added successfully');
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Failed to add movie');
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
