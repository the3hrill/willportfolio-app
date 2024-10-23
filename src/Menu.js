import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { motion } from 'framer-motion';

function Menu() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu">
          <ul className="nav-menu">
            <motion.li
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 1))',
              }}
              whileHover={{ scale: 1.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 1))',
              }}
              whileHover={{ scale: 1.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Link to="/Projects">Projects</Link>
            </motion.li>
            <motion.li
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 1))',
              }}
              whileHover={{ scale: 1.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Link to="/Contact">Contacts</Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
