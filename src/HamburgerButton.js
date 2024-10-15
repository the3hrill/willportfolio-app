import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './HamburgerButton.css';

function HamburgerButton({ isOpen, toggle }) {
  const [active, setActive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    'rgba(255, 255, 255, 0)'
  );
  const handleClick = () => {
    setActive(!active);
    toggle();
  };

  return (
    <motion.button
      className="hamburger-button"
      onClick={handleClick}
      style={{
        position: 'relative',

        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        transition: 'colors 0.15s ease-in-out',
        border: 'none',
        animate: active ? 'open' : 'closed',
      }}
      onMouseOver={() => setBackgroundColor('rgba(255, 255, 255, 0.2)')}
      onMouseOut={() => setBackgroundColor('rgba(255, 255, 255, 0)')}
    >
      <motion.span
        animate={active ? 'open' : 'closed'}
        style={{
          position: 'absolute',
          left: '50%',
          top: '35%',
          x: '-50%',
          y: '-50%',
          height: '0.5rem',
          width: '2.5rem',
          backgroundColor: 'white',
        }}
        variants={{
          open: {
            rotate: ['0deg', '0deg', '45deg'],
            top: ['35%', '50%', '50%'],
          },
          closed: {
            rotate: ['45deg', '0deg', '0deg'],
            top: ['50%', '50%', '35%'],
          },
        }}
      />
      <motion.span
        animate={active ? 'open' : 'closed'}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
          height: '0.5rem',
          width: '2.5rem',
          backgroundColor: 'white',
        }}
        variants={{
          open: {
            rotate: ['0deg', '0deg', '-45deg'],
          },
          closed: { rotate: ['-45deg', '0deg', '0deg'] },
        }}
      />
      <motion.span
        animate={active ? 'open' : 'closed'}
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '35%',
          x: '-50%',
          y: '50%',
          height: '0.5rem',
          width: '2.5rem',
          backgroundColor: 'white',
        }}
        variants={{
          open: {
            rotate: ['0deg', '0deg', '45deg'],
            left: ['50%'],
            bottom: ['35%', '50%', '50%'],
          },
          closed: { rotate: ['45deg', '0deg', '0deg'] },
          left: ['50%'],
          bottom: ['50%', '50%', '35%'],
        }}
      />
    </motion.button>
  );
}

export default HamburgerButton;
