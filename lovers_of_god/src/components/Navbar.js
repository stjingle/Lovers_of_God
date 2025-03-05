// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link className="navbar-brand" to="/">Lovers of God</Link>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//           <li><Link to="/events">Events</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar">
      <h1>Lovers of God</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/events">Events</Link>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
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
