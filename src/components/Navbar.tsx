'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-sm sm:max-w-md mx-auto">
      <div className="flex justify-between items-center py-2 px-6 bg-black/20 backdrop-blur-md rounded-full shadow-[0_0_2px_#ffffff40_inset,0_0_2px_#ffffff40]">
        <Image 
          src="/images/logo.svg" 
          alt="Logo" 
          width={50} 
          height={20}
          data-ai-hint="logo"
        />
        <motion.button 
          className="px-6 py-2 bg-[#FF0879] text-white font-bold rounded-full text-sm font-chakra button-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          REGISTER
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
