import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure CSS is linked

const Navbar = () => {
  return (
    <nav className="navbar">  {/* Add className="navbar" */}
      <h2 className="logo">BookNest</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
