import React from 'react';
import ToggleButton from './ToggleButton';
import { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

import './Contact.css';

const Contact = ({ isFlipped, flip }) => {
  useEffect(() => {
    document.body.style.backgroundColor = isFlipped ? 'black' : '#1f75fe';
    document.body.style.fontFamily = isFlipped
      ? "'Protest Guerrilla', sans-serif"
      : "'Concert One', sans-serif";
  }, [isFlipped]);
  return (
    <div className="ContactsBody">
      <h1 className="ContactsTitle">Contacts</h1>
      <div className="contactContainer">
        <motion.div
          className="SocialIcon"
          style={{
            filter: 'drop-shadow(0 10px 10px #000)',
          }}
          whileHover={{
            scale: 1.2,
            filter: 'drop-shadow(0 10px 10px #000)',
          }}
        >
          <SocialIcon
            className="SocialIcon"
            url="https://linkedin.com/in/couetilc"
          />
        </motion.div>

        <motion.div
          className="SocialIcon"
          style={{ filter: 'drop-shadow(0 10px 10px #000)' }}
          whileHover={{ scale: 1.2, filter: 'drop-shadow(0 10px 10px #000)' }}
        >
          <SocialIcon
            className="SocialIcon"
            network="email"
            url="https://the3hrillart@gmail.com"
          />
        </motion.div>

        <motion.div
          className="SocialIcon"
          style={{ filter: 'drop-shadow(0 10px 10px #000)' }}
          whileHover={{ scale: 1.2, filter: 'drop-shadow(0 10px 10px #000)' }}
        >
          <SocialIcon className="SocialIcon" url="https://github.com" />
        </motion.div>
        <motion.div
          className="SocialIcon"
          style={{ filter: 'drop-shadow(0 10px 10px #000)' }}
          whileHover={{ scale: 1.2, filter: 'drop-shadow(0 10px 10px #000)' }}
        >
          <SocialIcon className="SocialIcon" url="https://instagram.com" />
        </motion.div>
      </div>
      <section className="ToggleContact">
        <ToggleButton onClick={flip} />
      </section>
    </div>
  );
};

export default Contact;
