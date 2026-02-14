import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    <header>
      <h2>Food Blog</h2>
      <ul>
        <li>Home</li>
        <li>My Recipe</li>
        <li>Favourites</li>
        <li>Login</li>
      </ul>
    </header>
    </div>
  );
}

export default Navbar;
