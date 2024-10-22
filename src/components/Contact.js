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
  const dropShadowColor = isFlipped ? '#fff' : '#000';

  return (
    <div className="ContactsBody">
      <h1 className="ContactsTitle">Contacts</h1>
      <div className="contactContainer">
        <motion.div
          className="SocialIcon"
          style={{
            filter: `drop-shadow(0 10px 5px ${dropShadowColor})`,
          }}
          whileHover={{
            scale: 1.2,
            filter: `drop-shadow(0 10px 5px ${dropShadowColor})`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5,
          }}
        >
          <SocialIcon
            className="SocialIcon"
            url="https://linkedin.com/in/couetilc"
          />
        </motion.div>

        <motion.div
          className="SocialIcon"
          style={{ filter: `drop-shadow(0 10px 5px ${dropShadowColor})` }}
          whileHover={{
            scale: 1.2,
            filter: `drop-shadow(0 10px 5px ${dropShadowColor})`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.8,
          }}
        >
          <SocialIcon
            className="SocialIcon"
            network="email"
            url="https://the3hrillart@gmail.com"
          />
        </motion.div>

        <motion.div
          className="SocialIcon"
          style={{ filter: `drop-shadow(0 10px 5px ${dropShadowColor})` }}
          whileHover={{
            scale: 1.2,
            filter: `drop-shadow(0 10px 5px ${dropShadowColor})`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
        >
          <SocialIcon className="SocialIcon" url="https://github.com" />
        </motion.div>
        <motion.div
          className="SocialIcon"
          style={{ filter: `drop-shadow(0 10px 5px ${dropShadowColor})` }}
          whileHover={{
            scale: 1.2,
            filter: `drop-shadow(0 10px 5px ${dropShadowColor})`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.2,
          }}
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
