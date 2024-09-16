import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default to User
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // POST request to register the user
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      // Fetching the response containing success, role, and id
      const { success, role: responseRole, id } = res.data;

      // If signup is successful, redirect to the appropriate dashboard
      if (success) {
        if (responseRole === "User") {
          navigate("/UserDashboard", { state: { id } });
        } else if (responseRole === "Provider") {
          navigate("/ProviderDashboard", { state: { id } });
        }
      }
    } catch (error) {
      console.error("Signup Error", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="p-4 border rounded shadow">
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setRole("User")}
          >
            Sign Up as User
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => setRole("Provider")}
          >
            Sign Up as Movie Provider
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; 

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("User"); // Default to User
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       // POST request to register the user
//       const res = await axios.post("http://localhost:5000/api/auth/register", { name, email, password, role });
      
//       // Fetching the response containing success, role, and id
//       const { success, role: responseRole, id } = res.data;

//       // If signup is successful, redirect to the appropriate dashboard
//       if (success) {
//         if (responseRole === "User") {
//           navigate("/UserDashboard", { state: { id } });
//         } else if (responseRole === "Provider") {
//           navigate("/ProviderDashboard", { state: { id } });
//         }
//       }
//     } catch (error) {
//       console.error("Signup Error", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
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
//         <div>
//           <button type="submit" onClick={() => setRole("User")}>
//             Sign Up as User
//           </button>
//           <button type="submit" onClick={() => setRole("Provider")}>
//             Sign Up as Movie Provider
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
