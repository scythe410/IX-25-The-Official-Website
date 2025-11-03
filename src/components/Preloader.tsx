'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

const Preloader = () => {
  const [showWords, setShowWords] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const glitch = useGlitch({
    playMode: 'manual',
    glitchTimeSpan: false,
    shake: {
      velocity: 15,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: false,
    },
  });

  useEffect(() => {
    const wordsTimer = setTimeout(() => {
      setShowWords(false);
    }, 2500);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => {
      clearTimeout(wordsTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  useEffect(() => {
    if (showLogo) {
      glitch.startGlitch();
      const timer = setTimeout(() => {
        glitch.stopGlitch();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showLogo, glitch]);

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(8px)',
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.2, 1, 0.2, 1] },
    },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-chakra dot-grid-background"
    >
      <AnimatePresence>
        {showWords && (
          <motion.div
            key="words"
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col md:flex-row items-center justify-center text-5xl md:text-7xl font-bold tracking-widest text-white space-y-4 md:space-y-0 md:space-x-8"
          >
            <motion.span variants={wordVariants}>BIGGER.</motion.span>
            <motion.span variants={wordVariants} style={{ color: '#FF0879' }}>
              GRANDER.
            </motion.span>
            <motion.span variants={wordVariants}>WILDER.</motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showLogo && (
          <motion.div
            key="final-stage"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center absolute"
          >
            <div ref={glitch.ref} className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/images/logo.svg"
                alt="IX 25 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
