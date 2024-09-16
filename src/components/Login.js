import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Updated to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      const { role, success, id } = res.data;

      if (role === "User") {
        navigate("/UserDashboard", { state: { id } });
      } else if (role === "Provider") {
        navigate("/ProviderDashboard", { state: { id } });
      }
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark text-light">
      <div className="card bg-secondary p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          {/* Optional signup or forgot password link */}
          <a href="/signup" className="text-light">
            Don’t have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate,Link } from "react-router-dom"; // Updated import
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Updated to useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//       const { role,success,id } = res.data;
      
//       if (role === "User") {
//         navigate("/UserDashboard",{ state:  {id } }); // Updated to use navigate
//       } else if (role === "Provider") {
//         navigate("/ProviderDashboard",{ state: {id}  }); // Updated to use navigate
//       }
//     } catch (error) {
//       console.error("Login Error", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         {/* <Link to={'/'}></Link> */}
//       </form>
//       {/* <button onClick={() => navigate("/signup")}>Sign Up</button>  */}
//     </div>
//   );
// };

// export default Login;
