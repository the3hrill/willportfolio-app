import React from 'react';
import ToggleButton from './ToggleButton';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gif1 from '../assets/gifs/translate.gif';
import gif2 from '../assets/gifs/translatemenu.gif';
import gif3 from '../assets/gifs/weatherapp.gif';
import gif4 from '../assets/gifs/littlelemonmain.gif';
import gif5 from '../assets/gifs/littlelemonmenu.gif';
import gif6 from '../assets/gifs/littlelemonres.gif';
import './Projects.css';

const Projects = ({ isFlipped, flip }) => {
  useEffect(() => {
    document.body.style.backgroundColor = isFlipped ? 'black' : '#1f75fe';
    document.body.style.fontFamily = isFlipped
      ? "'Protest Guerrilla', sans-serif"
      : "'Concert One', sans-serif";
  }, [isFlipped]);
  return (
    <div className="ProjectsBody">
      <h1 className="ProjectsTitle">Projects</h1>
      <div className="ProjectsSection">
        <section className="TranslateSection">
          <h3 className="headerTitle">Translate App</h3>
          <container id="translateapp">
            <motion.div
              className="gifsize"
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.8,
                y: -40,
                filter: 'drop-shadow(-20px 20px 20px rgba(0, 0, 0, 0.5))',
                zIndex: 1,
              }}
              onClick={() =>
                window.open('https://github.com/the3hrill/translateapp')
              }
            >
              <img src={gif1} alt="TranslateGif" />
            </motion.div>
            <motion.div
              className="gifsize"
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.8,
                y: -40,
                filter: 'drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.5))',
                zIndex: 1,
              }}
              onClick={() =>
                window.open('https://github.com/the3hrill/translateapp')
              }
            >
              <img src={gif2} alt="TranslateGif" />
            </motion.div>
          </container>
        </section>

        <section className="WeatherSection">
          <h3 className="headerTitle">Weather App</h3>
          <container id="weatherapp">
            <motion.div
              className="gifsize"
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.8,
                y: -40,
                filter: 'drop-shadow(0 20px 20px rgba(0, 0, 0, 0.5))',
              }}
              onClick={() =>
                window.open('https://github.com/the3hrill/weatherapp')
              }
            >
              <img src={gif3} alt="WeatherAppGif" />
            </motion.div>
          </container>
        </section>
        <section className="LemonSection">
          <h3 className="headerTitle">Little Lemon App</h3>
          <container id="littlelemonapp">
            <motion.div
              className="gifsize"
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.8,
                y: -40,
                filter: 'drop-shadow(-20px 20px 20px rgba(0, 0, 0, 0.5))',
                zIndex: 1,
              }}
              onClick={() =>
                window.open('https://github.com/the3hrill/littlelemonapp')
              }
            >
              <img src={gif4} alt="LittleLemonMainGif" />
            </motion.div>
            <motion.div
              className="gifsize"
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.8,
                y: -40,
                filter: 'drop-shadow(0 20px 20px rgba(0, 0, 0, 0.5))',
                zIndex: 1,
              }}
              onClick={() =>
                window.open('https://github.com/the3hrill/littlelemonapp')
              }
            >
              <img src={gif5} alt="LittleLemonMenuGif" />
            </motion.div>
            <motion.div
              className="gifsize"
              animate={{
                borderRadius: 32,
                filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.8,
                y: -40,
                filter: 'drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.5))',
                zIndex: 1,
              }}
              onClick={() =>
                window.open('https://github.com/the3hrill/littlelemonapp')
              }
            >
              <img src={gif6} alt="LittleLemonResGif" />
            </motion.div>
          </container>
        </section>
        <ToggleButton onClick={flip} />
      </div>
    </div>
  );
};

export default Projects;
