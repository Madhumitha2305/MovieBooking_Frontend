import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default to User
  const navigate = useNavigate(); // Updated to useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password, role });
      if (role === "User") {
        navigate("/UserDashboard"); // Updated to use navigate
      } else if (role === "Provider") {
        navigate("/ProviderDashboard"); // Updated to use navigate
      }
    } catch (error) {
      console.error("Signup Error", error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
      <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <div>
          <button type="submit" onClick={() => setRole("User")}>
            Sign Up as User
          </button>
          <button type="submit" onClick={() => setRole("Provider")}>
            Sign Up as Movie Provider
          </button>
        </div>
        {/* <button type="submit">Sign Up</button> */}
      </form>
    </div>
  );
};

export default Signup;
