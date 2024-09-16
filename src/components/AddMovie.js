import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/movies/', { title, description, availableSeats, price });
      console.log(res.data);
      alert('Movie added successfully');
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Failed to add movie');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Movie Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              className="form-control"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="availableSeats" className="form-label">Available Seats</label>
            <input
              type="number"
              id="availableSeats"
              className="form-control"
              placeholder="Enter available seats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              id="price"
              className="form-control"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddMovie = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [availableSeats, setAvailableSeats] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res= await axios.post('http://localhost:5000/api/movies/', { title, description, availableSeats, price });
//       console.log(res.data);
//       alert('Movie added successfully');
//     } catch (error) {
//       console.error('Error adding movie:', error);
//       alert('Failed to add movie');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Movie</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Available Seats"
//           value={availableSeats}
//           onChange={(e) => setAvailableSeats(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <button type="submit">Add Movie</button>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;
