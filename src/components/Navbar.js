import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="primary-color">Employee App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add" className="ml-3">
          New Employee
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
