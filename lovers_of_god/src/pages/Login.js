// import React, { useState } from "react";
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../firebase/config";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={handleGoogleLogin}>Sign in with Google</button>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body text-center">
          <img src="/your-logo.png" alt="Logo" className="mb-3" style={{ maxWidth: "100px" }} /> {/* Replace with your logo */}
          <h3 className="mb-3">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <hr />
          <button className="btn btn-danger w-100 mt-2" onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
