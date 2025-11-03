'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const words = ['BIGGER.', 'GRANDER.', 'WILDER.'];

const Preloader = () => {
  const [showFinal, setShowFinal] = useState(false);
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setTimeout(() => {
      if (wordIndex < words.length) {
        setCurrentWords(prev => [...prev, words[wordIndex]]);
        setWordIndex(wordIndex + 1);
      } else {
         setTimeout(() => {
            setShowFinal(true);
         }, 500);
      }
    }, 700);

    return () => clearTimeout(wordTimer);
  }, [wordIndex]);
  
  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const finalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.2, 1, 0.2, 1] } },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-chakra"
    >
      <AnimatePresence>
        {!showFinal ? (
          <motion.div
            key="words"
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col md:flex-row items-center justify-center text-5xl md:text-7xl font-bold tracking-widest text-white space-y-4 md:space-y-0 md:space-x-8"
          >
            {currentWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants}>{word}</motion.span>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="final-stage"
            variants={finalVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="glitch-image relative w-48 h-48 md:w-64 md:h-64">
                <Image
                    src="/images/logo.svg"
                    alt="IX 25 Logo"
                    fill
                    className="object-contain"
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;

    