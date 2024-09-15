import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom"; // Updated import
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Updated to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const { role,success,id } = res.data;

      if (role === "User") {
        navigate("/UserDashboard",{ state:  {id } }); // Updated to use navigate
      } else if (role === "Provider") {
        navigate("/ProviderDashboard",{ state: {id}  }); // Updated to use navigate
      }
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {/* <Link to={'/'}></Link> */}
      </form>
      {/* <button onClick={() => navigate("/signup")}>Sign Up</button>  */}
    </div>
  );
};

export default Login;
