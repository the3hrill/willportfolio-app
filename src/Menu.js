import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Menu() {
  return (
    <nav className="navbar">
      <div className="container">
        <nav className="menu">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Menu;
