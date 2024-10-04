import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ToggleButton.css';
import { ReactComponent as BoldPaintIcon } from '../assets/logos/boldpaint.svg';
import { ReactComponent as CodeIcon } from '../assets/logos/code.svg';
import { useContext } from 'react';
import { ToggleContext } from './ToggleContext';

export default function App({ onClick }) {
  const [isOn, setIsOn] = useContext(ToggleContext);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring}>
        {isOn ? <CodeIcon /> : <BoldPaintIcon />}
      </motion.div>
    </div>
  );
}

const spring = {
  type: 'spring',
  stiffness: 100,
  damping: 10,
};
