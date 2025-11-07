
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 px-6 bg-black/20 backdrop-blur-md border border-gray-800 shadow-lg rounded-full mb-4">
          <Image 
            src="/images/logo.svg" 
            alt="Logo" 
            width={50} 
            height={20}
            data-ai-hint="logo"
          />
          <a href="https://forms.gle/eTSignSuyngmLmSN9" target="_blank" rel="noopener noreferrer">
            <motion.button 
              className="px-6 py-2 bg-[#FF0879] text-white font-bold rounded-full text-sm button-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER
            </motion.button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

    