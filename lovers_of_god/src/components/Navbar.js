import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import "../styles/Navbar.css"; // Updated to use new CSS path

const Navbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Lovers of God</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Updates</Link>
        
        {/* Dropdown for Events */}
        <div 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="dropbtn">Events ▼</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/events">View Events</Link>
              <Link to="/createvent">Create Event</Link>
            </div>
          )}
        </div>

        {user ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
