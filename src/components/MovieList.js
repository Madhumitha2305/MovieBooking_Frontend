import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
        const response = await axios.get('http://localhost:5000/api/movies/provider/123'); // Replace 123 with actual provider ID
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);
    setTitle(movie.title);
    setDescription(movie.description);
    setAvailableSeats(movie.availableSeats);
    setPrice(movie.price);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/movies/${id}`, {
        title,
        description,
        availableSeats,
        price,
      });
      setMovies(
        movies.map((movie) =>
          movie._id === id ? { ...movie, title, description, availableSeats, price } : movie
        )
      );
      setEditMovie(null);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <p className="card-text">Seats: {movie.availableSeats}</p>
                <p className="card-text">Price: ${movie.price}</p>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(movie._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(movie)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editMovie && (
        <div className="mt-5">
          <h2 className="text-center">Edit Movie</h2>
          <form
            className="w-50 mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editMovie._id);
            }}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Available Seats"
                value={availableSeats}
                onChange={(e) => setAvailableSeats(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success me-2">
              Update Movie
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditMovie(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [editMovie, setEditMovie] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [availableSeats, setAvailableSeats] = useState('');
//   const [price, setPrice] = useState('');

//   useEffect((id) => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/movies/provider/:${id}`);
//         setMovies(response.data);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/movies/:${id}`);
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

//   return (
//     <div>
//       <h2>Movies</h2>
//       {movies.map(movie => (
//         <div key={movie._id} className="movie-card">
//           <h3>{movie.title}</h3>
//           <p>{movie.description}</p>
//           <p>Seats: {movie.availableSeats}</p>
//           <p>Price: ${movie.price}</p>
//           <button onClick={() => handleDelete(movie._id)}>Delete</button>
//           <button onClick={() => setEditMovie(movie)}>Edit</button>
//         </div>
//       ))}

//       {editMovie && (
//         <div className="edit-form">
//           <h2>Edit Movie</h2>
//           <form onSubmit={(e) => { e.preventDefault(); handleEdit(editMovie._id); }}>
//             <input
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//             <input
//               type="number"
//               placeholder="Available Seats"
//               value={availableSeats}
//               onChange={(e) => setAvailableSeats(e.target.value)}
//               required
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />
//             <button type="submit">Update Movie</button>
//             <button onClick={() => setEditMovie(null)}>Cancel</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieList;
