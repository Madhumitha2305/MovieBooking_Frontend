import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function MainPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="text-center">
        <h1 className="mb-5">MovieBookie</h1>
        <div>
          <Link to="/login" className="btn btn-primary mx-2">Login</Link>
          <Link to="/signup" className="btn btn-secondary mx-2">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;


// import React from 'react';
// import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate

// function MainPage() {
//   const navigate = useNavigate(); // Initialize useNavigate

//   return (
//     <div>
//       <h1>Main Page</h1>
//       {/* <button onClick={() => navigate('/login')}>Login</button> {/* Navigate to Login page */}
//       {/* <button onClick={() => navigate('/signup')}>Sign Up</button> Navigate to Signup page */} */
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign Up</Link>
//     </div>
//   );
// }

// export default MainPage;
