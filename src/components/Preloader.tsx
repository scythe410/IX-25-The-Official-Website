'use client';

import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      {/* Stage 1 & 2: Kinetic text animation and zoom out */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.2, transitionEnd: { display: 'none' } }}
        transition={{ duration: 1.5, ease: 'easeIn', delay: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="font-chakra font-bold text-[25vw] md:text-[20vw] leading-none uppercase">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex"
          >
            {'DESIGN'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: '-100vw' },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 + i * 0.05 } },
                }}
                className={char === 'G' ? 'text-[#FF0879]' : 'text-white'}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex"
          >
            {'ATHON'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: '100vw' },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.4 + i * 0.05 } },
                }}
                className={char === 'N' ? 'text-[#FF0879]' : 'text-white'}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Stage 3: Final title and subtitle reveal */}
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
