import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Lovers of God</h1>
        <p>Join us as we share faith, love, and inspiring messages.</p>
        <div className="btn-group">
          <Link to="/blog" className="btn btn-primary">Read Blog</Link>
          <Link to="/events" className="btn btn-secondary">Upcoming Events</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return <h1>Welcome to Lovers of God</h1>;
// };

// export default Home;
