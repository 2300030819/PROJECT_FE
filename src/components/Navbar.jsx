import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure CSS is linked
<Link to="/contact">Contact</Link>

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">BookNest</h2>
      <ul>
        <li className="navbarLinks"><Link to="/">Home</Link></li>
        <li className="navbarLinks"><Link to="/hotels">Hotels</Link></li>
        <li className="navbarLinks"><Link to="/about">About</Link></li>
        <li className="navbarLinks"><Link to="/contact">Contact</Link></li>
        <li className="navbarLinks login-btn"><Link to="/login">Login</Link></li> {/* ✅ Added Login */}
        <li className="navbarLinks register-btn"><Link to="/register">Register</Link></li> {/* ✅ Added Register */}
      </ul>
    </nav>
  );
};

export default Navbar;