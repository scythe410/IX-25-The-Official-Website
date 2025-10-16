'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const images = [
  '/images/c1.webp',
  '/images/c2.webp',
  '/images/c3.webp',
  '/images/c4.webp',
  '/images/c5.webp',
  '/images/c6.webp',
  '/images/c7.webp',
  '/images/c8.webp',
];

const MemoriesCarousel = () => {
  return (
    <div className="memories-carousel">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        speed={5000} // This creates a smooth continuous scroll
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 50
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Memory ${index + 1}`}
                fill
                style={{objectFit:"cover"}}
                className="transition-all duration-300"
                data-ai-hint="hackathon event"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MemoriesCarousel;
