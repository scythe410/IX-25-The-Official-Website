'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const finalTitleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 2.3,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2.8,
    },
  },
};


const Preloader = () => {
  const title = "IX-25";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      {/* Stage 1: Kinetic text animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
        transition={{ duration: 0.5, ease: 'easeIn', delay: 2.0 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-chakra font-bold text-7xl md:text-9xl tracking-tighter flex overflow-hidden"
        >
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={char === 'X' || char === '2' ? 'text-[#FF0879]' : 'text-white'}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Stage 2: Final title and subtitle reveal */}
      <motion.div
        variants={finalTitleVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center"
      >
        <div className="text-5xl md:text-7xl font-bold tracking-widest text-glow font-chakra mb-2">
          IX 25'
        </div>
        <motion.div
          variants={subtitleVariants}
          className="text-center text-sm md:text-base text-gray-400 font-chakra"
        >
          Magic Happening...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
