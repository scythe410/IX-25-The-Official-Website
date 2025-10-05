import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">&copy; 2025 CodeSprint X. All Rights Reserved.</p>
        <div className="flex gap-6">
          <FaFacebook className="text-xl text-gray-400 hover:text-white cursor-pointer" />
          <FaTwitter className="text-xl text-gray-400 hover:text-white cursor-pointer" />
          <FaInstagram className="text-xl text-gray-400 hover:text-white cursor-pointer" />
          <FaLinkedin className="text-xl text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
