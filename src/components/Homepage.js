import React from 'react';
import './Homepage.css';

import TextAnimation from './TextAnimation';

import ToggleButton from './ToggleButton';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import TextAnimationTwo from './TextAnimationTwo';
import TextAnimationThree from './TextAnimationThree';

function Homepage({ isFlipped, flip }) {
  useEffect(() => {
    document.body.style.backgroundColor = isFlipped ? 'black' : '#1f75fe';
    document.body.style.fontFamily = isFlipped
      ? "'Protest Guerrilla', sans-serif"
      : "'Concert One', sans-serif";
  }, [isFlipped]);

  return (
    <div className="homepage-style">
      <motion.header className="header">
        <motion.div
          animate={{ rotateY: isFlipped ? 360 : 0 }}
          transition={{ duration: 1 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {isFlipped ? (
            <TextAnimationTwo />
          ) : (
            <TextAnimation style={{ whiteSpace: 'nowrap' }} />
          )}
          <h2
            className={isFlipped ? 'colorChange' : 'colorChangeReverse'}
            style={{ fontSize: '3em' }}
          >
            Creator
          </h2>
          {/*   <motion.h3
          whileHover={{ scale: 1.3, x: 50, rotateY: 70 }}
          transition={{ duration: 0.5 }}
        >
          {isFlipped ? 'Coder' : 'Artist'}
        </motion.h3> */}
          {isFlipped ? (
            <motion.h3
              style={{ fontSize: '2rem' }}
              className="coderChange"
              whileHover={{ scale: 1.3, x: 50, rotateY: 70 }}
              transition={{ duration: 0.5 }}
            >
              Coder
            </motion.h3>
          ) : (
            <motion.h3
              style={{ fontSize: '2rem' }}
              className="artistChange"
              whileHover={{ scale: 1.1, x: -50, rotateY: -70 }}
              transition={{ duration: 0.5 }}
            >
              Artist
            </motion.h3>
          )}
        </motion.div>

        <section className="sub-header-text">
          <motion.div className="frontEndHeader">
            Front-end Web Developer
          </motion.div>
          <TextAnimationThree>
            <p>React Javascript Node SQL CSS HTML Figma</p>
          </TextAnimationThree>
        </section>

        <ToggleButton onClick={flip} />
      </motion.header>
    </div>
  );
}

export default Homepage;
