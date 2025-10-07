'use client';

import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black dot-grid-background"
    >
      <div className="text-2xl font-bold tracking-widest text-glow font-orbit mb-4">
        CODESPRINT X
      </div>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden box-glow">
        <motion.div
          className="h-full bg-pink-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
