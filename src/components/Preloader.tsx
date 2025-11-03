
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrambledText = ({ text }: { text: string }) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let counter = 0;

    interval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < text.length; i++) {
        const isResolved = i < counter;
        if (isResolved) {
          newText += text[i];
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayText(newText);
      
      if(counter > text.length) {
        clearInterval(interval)
        setDisplayText(text);
      }
      counter++;

    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};


const Preloader = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const sequence = [
            setTimeout(() => setStage(1), 200), // Initial render
            setTimeout(() => setStage(2), 2000), // Show IX-25
            setTimeout(() => setStage(3), 3000), // Show subtitle
            setTimeout(() => setStage(4), 4500) // Start fade out
        ];
        return () => sequence.forEach(clearTimeout);
    }, []);


  return (
    <AnimatePresence>
        {stage < 4 && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-chakra"
            >
                {/* Stage 1: DESIGNATHON zooms out */}
                <AnimatePresence>
                {stage === 1 && (
                    <motion.div
                        key="designathon"
                        initial={{ opacity: 0, scale: 3 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition:{ duration: 0.8, ease: 'easeIn'} }}
                        className="absolute text-center"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold text-white/80 tracking-widest animate-scrolling-text">
                            DESIGNATHON
                        </h1>
                    </motion.div>
                )}
                </AnimatePresence>


                {/* Stage 2 & 3: IX-25 and Subtitle */}
                <AnimatePresence>
                {stage >= 2 && (
                     <motion.div
                        key="ix-25"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-center"
                    >
                        <div 
                          className="glitch text-7xl md:text-9xl font-bold tracking-widest heading-gradient mb-2"
                          data-text="IX-25"
                        >
                           <ScrambledText text="IX-25" />
                        </div>

                        {stage === 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                className="text-center text-sm md:text-base text-gray-400 font-chakra"
                            >
                                Magic Happening...
                            </motion.div>
                        )}
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
        )}
    </AnimatePresence>
  );
};

export default Preloader;
