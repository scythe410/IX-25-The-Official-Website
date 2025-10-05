import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-8 md:px-16 bg-black bg-opacity-30 backdrop-blur-sm">
      <h1 className="text-2xl font-bold tracking-widest text-glow">CODESPRINT X</h1>
      <button className="px-6 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 button-glow">
        REGISTER
      </button>
    </nav>
  );
};

export default Navbar;
