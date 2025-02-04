import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="menuSol">
        <Link to="/">Home</Link>
        <Link to="/about">Mission</Link>
        <Link to="/contact">Game</Link>
      </nav>
      <div className="logo">
        <img src="/logo.png" alt="Logo" href="/" />
      </div>
      <nav className="menuSag">
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;