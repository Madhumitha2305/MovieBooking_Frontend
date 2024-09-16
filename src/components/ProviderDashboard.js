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
        const response = await axios.get(`http://localhost:5000/api/movies/provider/${id}`);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [id]);

  const handleViewChange = (viewName) => {
    setView(viewName);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      setMovies(movies.filter(movie => movie._id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Movie Provider Dashboard</h2>
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => handleViewChange("addMovie")}>
          Add Movie
        </button>
        <button className="btn btn-secondary mx-2" onClick={() => handleViewChange("movieList")}>
          View Movies
        </button>
      </div>

      {view === "addMovie" && (
        <div className="card p-4">
          <AddMovie />
        </div>
      )}

      {view === "movieList" && (
        <div className="row">
          {movies.map(movie => (
            <div key={movie._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <p className="card-text">Seats: {movie.availableSeats}</p>
                  <p className="card-text">Price: ${movie.price}</p>
                  <button className="btn btn-danger me-2" onClick={() => handleDelete(movie._id)}>
                    Delete
                  </button>
                  <button className="btn btn-warning" onClick={() => setEditMovie(movie)}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProviderDashboard;


// // import React from "react";

// // const ProviderDashboard = () => {
// //   return <h2>Welcome to the Movie Provider Dashboard</h2>;

// // };

// // export default ProviderDashboard;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import AddMovie from "./AddMovie";
// import MovieList from "./MovieList";

// const ProviderDashboard = () => {
//   const [editMovie, setEditMovie] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [availableSeats, setAvailableSeats] = useState('');
//   const [price, setPrice] = useState('');
//   const [view, setView] = useState("dashboard"); // State to manage which view to show
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const { id } = location.state || {};

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/movies/provider/:${id}`);
//         console.log(response.data);
//         setMovies(response.data);
//       } catch (error) {

//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handleViewChange = (viewName) => {
//     setView(viewName);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/movies/:${id}`);
//       // Optionally, update the list of movies
//       setMovies(movies.filter(movie => movie._id !== id));
//     } catch (error) {
//       console.error('Error deleting movie:', error);
//     }
//   };
  
//   const handleEdit = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/movies/:${id}`, { title, description, availableSeats, price });
//       setMovies(movies.map(movie =>
//         movie._id === id ? { ...movie, title, description, availableSeats, price } : movie
//       ));
//       setEditMovie(null);
//     } catch (error) {
//       console.error('Error updating movie:', error);
//     }
//   };
  
//   // const handleEdit = (id) => {
   
//   // };

//   return (
//     <div>
//       <h2>Welcome to the Movie Provider Dashboard</h2>
//       <div>
//         <button onClick={() => handleViewChange("addMovie")}>Add Movie</button>
//         <button onClick={() => handleViewChange("movieList")}>View Movies</button>
//       </div>
//       {view === "addMovie" && <AddMovie />}
//       {view === "movieList" && (
//         <div>
//           {movies.map(movie => (
//             <div key={movie._id} className="movie-card">
//               <h3>{movie.title}</h3>
//               <p>{movie.description}</p>
//               <p>Seats: {movie.availableSeats}</p>
//               <p>Price: ${movie.price}</p>
//               <button onClick={() => handleDelete(movie._id)}>Delete</button>
//               <button onClick={() => handleEdit(movie._id)}>Edit</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Functions to handle edit and delete



// export default ProviderDashboard;
