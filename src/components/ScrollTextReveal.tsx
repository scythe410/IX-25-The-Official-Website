'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ScrollTextRevealProps = {
  text: string;
  className?: string;
};

const ScrollTextReveal = ({ text, className }: ScrollTextRevealProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  });

  return (
    <p
      ref={containerRef}
      className={`text-lg text-gray-400 leading-relaxed ${className}`}
      style={{ lineHeight: '1.75' }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ['#6B7280', '#FFFFFF'] // Corresponds to text-gray-400 and text-white
        );
        return (
          <motion.span key={i} style={{ color }} className="transition-colors duration-100 ease-in-out">
            {word}{' '}
          </motion.span>
        );
      })}
    </p>
  );
};

export default ScrollTextReveal;
