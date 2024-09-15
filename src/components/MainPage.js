import React from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate

function MainPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div>
      <h1>Main Page</h1>
      {/* <button onClick={() => navigate('/login')}>Login</button> {/* Navigate to Login page */}
      {/* <button onClick={() => navigate('/signup')}>Sign Up</button> Navigate to Signup page */} */
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default MainPage;
