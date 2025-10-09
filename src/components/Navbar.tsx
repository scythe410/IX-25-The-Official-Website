'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl mx-auto">
      <div className="flex justify-between items-center py-2 px-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        <Image 
          src="https://picsum.photos/seed/logo/50/20" 
          alt="Logo" 
          width={50} 
          height={20}
          data-ai-hint="logo"
        />
        <motion.button 
          className="px-6 py-2 bg-[#95FF00] text-black font-bold rounded-full text-sm font-vt323 button-glow"
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
