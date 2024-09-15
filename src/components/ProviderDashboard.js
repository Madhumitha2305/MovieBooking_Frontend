// import React from "react";

// const ProviderDashboard = () => {
//   return <h2>Welcome to the Movie Provider Dashboard</h2>;

// };

// export default ProviderDashboard;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const ProviderDashboard = () => {
  const [view, setView] = useState("dashboard"); // State to manage which view to show
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/api/movies/provider/${id}`);
        setMovies(response.data);
      } catch (error) {

        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleViewChange = (viewName) => {
    setView(viewName);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/movies/${id}`);
      // Optionally, update the list of movies
      setMovies(movies.filter(movie => movie._id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };
  
  const handleEdit = (id) => {
    // Functionality to edit movie
    // You can implement a modal or a separate form to handle editing
  };

  return (
    <div>
      <h2>Welcome to the Movie Provider Dashboard</h2>
      <div>
        <button onClick={() => handleViewChange("addMovie")}>Add Movie</button>
        <button onClick={() => handleViewChange("movieList")}>View Movies</button>
      </div>
      {view === "addMovie" && <AddMovie />}
      {view === "movieList" && (
        <div>
          {movies.map(movie => (
            <div key={movie._id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Seats: {movie.availableSeats}</p>
              <p>Price: ${movie.price}</p>
              <button onClick={() => handleDelete(movie._id)}>Delete</button>
              <button onClick={() => handleEdit(movie._id)}>Edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Functions to handle edit and delete



export default ProviderDashboard;
