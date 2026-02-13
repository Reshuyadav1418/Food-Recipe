import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
