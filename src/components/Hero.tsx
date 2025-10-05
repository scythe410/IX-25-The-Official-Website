import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(/hero-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Image
        src="/astronaut.png"
        alt="Astronaut"
        width={800}
        height={800}
        className="absolute top-0 right-0 w-1/2 md:w-1/3 opacity-40"
      />
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-96 md:w-80 md:h-[450px]">
            <Image
              src="/floating-logo.png"
              alt="CodeSprint Logo"
              layout="fill"
              objectFit="contain"
              className="animate-pulse"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider leading-tight text-glow">
            THE BATTLE
            <br />
            FOR STARTUP
            <br />
            GRANDEUR
          </h2>
          <p className="mt-6 text-gray-300 max-w-lg mx-auto md:mx-0">
            CodeSprint X is the ultimate proving ground for aspiring entrepreneurs and developers. A platform where innovation meets execution, and groundbreaking ideas are forged into reality.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 button-glow">
            EXPLORE THE JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
