// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "../firebase/config";
// import { signOut } from "firebase/auth";
// import "../styles/Navbar.css"; // Updated to use new CSS path

// const Navbar = ({ user }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <nav className="navbar">
//       <h1 className="logo">Lovers of God</h1>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/blog">Updates</Link>
        
//         {/* Dropdown for Events */}
//         <div 
//           className="dropdown" 
//           onMouseEnter={() => setDropdownOpen(true)} 
//           onMouseLeave={() => setDropdownOpen(false)}
//         >
//           <button className="dropbtn">Events ▼</button>
//           {dropdownOpen && (
//             <div className="dropdown-content">
//               <Link to="/events">View Events</Link>
//               <Link to="/createvent">Create Event</Link>
//             </div>
//           )}
//         </div>

//         {user ? (
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; // Ensure this file has the previous color styles

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/your-logo.png" alt="Logo" className="me-2" style={{ width: "50px", height: "50px" }} />
          <span className="fw-bold">Lovers of God</span>
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Updates</Link>
            </li>

            {/* Dropdown for Events */}
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Events
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li><Link className="dropdown-item" to="/events">View Events</Link></li>
                <li><Link className="dropdown-item" to="/createvent">Create Event</Link></li>
              </ul>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-light fw-bold">{user.displayName || "User"}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
