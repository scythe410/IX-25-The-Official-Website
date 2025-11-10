'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

const Preloader = () => {
  const [showText, setShowText] = useState(true);
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
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 2500);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  useEffect(() => {
    if (showLogo) {
      glitch.startGlitch();
    }
  }, [showLogo, glitch]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
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

  const MarqueeText = () => (
    <>
      {'BIGGER. '}
      {'GRANDER. '}
      <span className="font-tommy-outline text-[#FF0879]">WILDER.</span>
      {' '}
    </>
  );

  const marqueeTextContent = Array(4).fill(0).map((_, i) => <MarqueeText key={i} />);


  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-tommy dot-grid-background overflow-hidden"
    >
      <AnimatePresence>
        {showText && (
          <motion.div
            key="marquee"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute w-full flex"
          >
            <div className="animate-preloader-marquee whitespace-nowrap">
              <span className="text-[20vw] font-bold mx-4 text-white">
                {marqueeTextContent}
              </span>
            </div>
            <div className="animate-preloader-marquee whitespace-nowrap">
              <span className="text-[20vw] font-bold mx-4 text-white">
                {marqueeTextContent}
              </span>
            </div>
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
