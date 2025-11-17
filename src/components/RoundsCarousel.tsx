
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const RoundsCarousel = () => {
  const conceptImage = PlaceHolderImages.find(img => img.id === 'concept-round');
  const finalImage = PlaceHolderImages.find(img => img.id === 'final-round');

  return (
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="relative"
      >
        <SwiperSlide>
          <div className="bg-[#FF0879]/10 backdrop-blur-sm p-8 rounded-2xl min-h-[500px] flex flex-col border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 heading-gradient">
                CONCEPT <span className="font-tommy-outline">ROUND</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center flex-grow">
                <div className="text-center md:text-left">
                  <p className="text-gray-300 mb-8">
                    This is where it all begins. The Concept Round is your chance to showcase your innovative ideas and design-thinking skills. Form your teams, brainstorm groundbreaking solutions, and submit a comprehensive proposal that outlines your vision. Focus on user experience, problem-solving, and feasibility.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <motion.button 
                      className="px-6 py-2 bg-[#FF0879] text-white font-bold rounded-full text-sm button-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW GUIDELINE BOOKLET
                    </motion.button>
                  </a>
                </div>
                <div className="relative h-64 md:h-full w-full">
                  {conceptImage && (
                    <Image
                      src={conceptImage.imageUrl}
                      alt="Concept Round Illustration"
                      fill
                      className="object-contain rounded-lg"
                      data-ai-hint={conceptImage.imageHint}
                    />
                  )}
                </div>
              </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="bg-[#FF0879]/10 backdrop-blur-sm p-8 rounded-2xl min-h-[500px] flex flex-col border border-white/10">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 heading-gradient">
                    FINAL <span className="font-tommy-outline">ROUND</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center flex-grow">
                    <div className="text-center md:text-left">
                        <p className="text-gray-300 mb-8">
                            The grand stage awaits. The Final Round is a 36-hour intensive designathon where the top teams will bring their concepts to life. Build, iterate, and perfect your prototypes with mentorship from industry experts before presenting to our panel of judges.
                        </p>
                        <Countdown />
                    </div>
                     <div className="relative h-64 md:h-full w-full">
                        {finalImage && (
                            <Image
                                src={finalImage.imageUrl}
                                alt="Final Round Illustration"
                                fill
                                className="object-contain rounded-lg"
                                data-ai-hint={finalImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        <div className="swiper-pagination-custom !bottom-0 !relative mt-8"></div>
      </Swiper>
  );
};

export default RoundsCarousel;

    
