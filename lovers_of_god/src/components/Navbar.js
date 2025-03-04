import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Lovers of God</h1>
      <Link to="/">Home</Link>
      <Link to="/create">New Post</Link>
    </nav>
  );
};

export default Navbar;
