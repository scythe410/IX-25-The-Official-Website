'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = (fromLeft: boolean) => ({
  hidden: { x: fromLeft ? '-100%' : '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
});

const finalTitleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 1.8,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2.3,
    },
  },
};

const Preloader = () => {
  const topRow = "DESIGN";
  const bottomRow = "ATHON";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 3.0, duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      {/* Stage 1: Kinetic text animation */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.5, transitionEnd: { display: 'none' } }}
        transition={{ duration: 0.8, ease: 'easeIn', delay: 1.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center font-chakra font-bold text-white uppercase"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex overflow-hidden text-[20vw] md:text-[15vw] leading-none"
        >
          {topRow.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants(true)}
              className={char === 'G' ? 'text-[#FF0879]' : ''}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex overflow-hidden text-[20vw] md:text-[15vw] leading-none"
        >
          {bottomRow.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants(false)}
               className={char === 'N' ? 'text-[#FF0879]' : ''}
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
