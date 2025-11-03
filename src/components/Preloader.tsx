'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['BIGGER', 'GRANDER', 'WILDER'];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setTimeout(() => {
        setShowFinal(true);
      }, 500);
      return;
    }

    const id = setInterval(() => {
      setIndex(index + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [index]);

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeIn' } },
  };
  
  const finalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.2, 1, 0.2, 1] } },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showFinal ? 1 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-chakra"
    >
      <AnimatePresence>
        {!showFinal ? (
          <motion.h1
            key={words[index]}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-6xl md:text-8xl font-bold tracking-widest text-white"
          >
            {words[index]}
          </motion.h1>
        ) : (
          <motion.div
            key="final-stage"
            variants={finalVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div 
              className="glitch text-7xl md:text-9xl font-bold tracking-widest heading-gradient mb-2"
              data-text="IX-25"
            >
               IX-25
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="text-center text-sm md:text-base text-gray-400 font-chakra"
            >
                Magic Happening...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
