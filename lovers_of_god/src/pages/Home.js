import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Lovers of God Family</h1>
        <p><h4>Join us as we share faith, love, and inspiring messages in Prayers and the Word.</h4></p>
        <div className="btn-group">
          <Link to="/blog" className="btn btn-primary">View Feeds</Link>
          <Link to="/events" className="btn btn-secondary">Upcoming Events</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

