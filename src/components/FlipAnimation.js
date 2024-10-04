import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FlipAnimation() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.main
      animate={{ rotateY: isFlipped ? 360 : 0 }}
      transition={{ duration: 1 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <button onClick={flip}>Flip Page</button>
    </motion.main>
  );
}

export default FlipAnimation;
