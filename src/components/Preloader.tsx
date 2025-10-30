'use client';

import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 1.5, opacity: 1 }}
        animate={{ scale: 0.2, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeIn', delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 flex flex-col animate-preloader-marquee-vertical">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-[25vw] font-bold text-white/30 font-chakra leading-none">
                DESIGNATHON
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.8 }}
        className="relative"
      >
        <div className="text-5xl md:text-7xl font-bold tracking-widest text-glow font-chakra mb-2 text-center">
          IX 25'
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="text-center text-sm md:text-base text-gray-400 font-chakra"
        >
          Magic Happening...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
