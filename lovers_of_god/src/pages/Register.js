// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/config";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/login");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient">
      <div className="card p-4 shadow-lg rounded border-0" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="card-body text-center">
          <img src="/your-logo.png" alt="Logo" className="mb-3 rounded-circle" style={{ maxWidth: "80px" }} />
          <h3 className="mb-3 text-primary fw-bold">BECOME A MEMBER</h3>
          <p className="text-muted">Join us and explore endless possibilities in God!</p>
          <form onSubmit={handleRegister} className="mt-3">
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control shadow-sm" 
                placeholder="Full Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="tel" 
                className="form-control shadow-sm" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <select 
                className="form-control shadow-sm" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control shadow-sm" 
                placeholder="Current Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control shadow-sm" 
                placeholder="Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                className="form-control shadow-sm" 
                placeholder="Create Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 shadow-sm">Sign Up</button>
          </form>
          <hr />
          <p className="mt-2 text-muted">Already have an account? <a href="/login" className="text-decoration-none text-primary">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

