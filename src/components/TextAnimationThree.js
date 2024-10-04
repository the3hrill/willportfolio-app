import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextAnimation.css';

function TextAnimationThree({ children }) {
  return (
    <main>
      <section>
        <h1 className="HeaderAnimationTwo">
          <AnimatePresence>
            {React.Children.map(children, (child, i) => (
              <div key={i}>
                {[...child.props.children].map((char, j) => (
                  <motion.span
                    key={j}
                    style={{ display: 'inline-block', fontSize: '2rem' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: j * 0.01,
                      x: { type: 'spring', damping: 10, delay: j * 0.1 },
                      y: { type: 'spring', damping: 10, delay: j * 0.1 },
                      repeat: Infinity,
                      repeatDelay: 10,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </AnimatePresence>
        </h1>
      </section>
    </main>
  );
}

export default TextAnimationThree;
