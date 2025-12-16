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
          disableOnInteraction: true,
        }}
        className="relative"
      >
        <SwiperSlide>
          <div className="bg-[#FF0879]/10 backdrop-blur-md p-8 md:p-12 rounded-2xl min-h-[550px] flex flex-col border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 heading-gradient">
                CONCEPT <span className="font-tommy-outline">ROUND</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <p className="text-gray-300 mb-8 text-justify">
                    This is where it all begins. The Concept Round is your chance to showcase your innovative ideas and design-thinking skills. Form your teams, brainstorm groundbreaking solutions, and submit a comprehensive proposal that outlines your vision. We're looking for creativity that pushes boundaries. This initial phase is critical for setting a strong foundation. Your submission will be judged on originality, impact, and clarity. Make sure your documentation is thorough and your concept is well-defined to stand out. Don't miss this opportunity to lay the groundwork for a winning project. Join us and turn your vision into a reality that could redefine the future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                    <a href="https://drive.google.com/file/d/1wNEAlvo49KgHf4OMRQgwb4H7KML-RK96/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      <motion.button 
                        className="px-8 py-3 bg-transparent border border-white/50 text-white font-bold rounded-full button-glow"
                        whileHover={{ scale: 1.05, backgroundColor: '#FF0879', borderColor: '#FF0879' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        VIEW GUIDELINE BOOKLET
                      </motion.button>
                    </a>
                     <div className="cursor-not-allowed">
                      <motion.button
                        disabled
                        className="px-8 py-3 bg-[#FF0879] text-white font-bold rounded-full filter blur-sm opacity-50 cursor-not-allowed"
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        SUBMIT NOW
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-96 w-full">
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
          <div className="bg-[#FF0879]/10 backdrop-blur-md p-8 md:p-12 rounded-2xl min-h-[550px] flex flex-col border border-white/10">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 heading-gradient">
                    FINAL <span className="font-tommy-outline">ROUND</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <p className="text-gray-300 mb-8 text-justify">
                           The grand stage awaits. The Final Round is a 36-hour intensive designathon where the top teams will bring their concepts to life. Build, iterate, and perfect your prototypes with mentorship from industry experts before presenting to our panel of judges. This is where your execution skills will be tested under pressure. You will have access to resources, workshops, and one-on-one sessions with mentors to help you refine your solution. Time management, teamwork, and the ability to adapt to feedback are crucial for success in this high-stakes final phase. Prepare to push your limits and deliver a polished, functional prototype that stands out.
                        </p>
                        <Countdown />
                    </div>
                     <div className="relative h-64 md:h-96 w-full">
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
