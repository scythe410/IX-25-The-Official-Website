import Image from 'next/image';
import React from 'react';

const images = [
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
  '/gallery-4.jpg',
];

const Memories = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-glow">OUR MEMORIES</h2>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src={src}
              alt={`Memory ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memories;
