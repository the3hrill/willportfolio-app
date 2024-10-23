import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextAnimation.css';

function TextAnimation() {
  const text = 'William Jones'.split('');

  return (
    <main>
      <section>
        <h1 className="HeaderAnimation">
          <AnimatePresence>
            {text.map((char, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{
                  delay: i * 0.3,
                  x: { type: 'spring', damping: 10, delay: i * 0.28 },
                  y: { type: 'spring', damping: 10, delay: i * 0.28 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
        </h1>
      </section>
    </main>
  );
}

export default TextAnimation;
