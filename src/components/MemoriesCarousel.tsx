'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const images = [
  'https://picsum.photos/seed/mem1/600/400',
  'https://picsum.photos/seed/mem2/600/400',
  'https://picsum.photos/seed/mem3/600/400',
  'https://picsum.photos/seed/mem4/600/400',
  'https://picsum.photos/seed/mem5/600/400',
  'https://picsum.photos/seed/mem6/600/400',
  'https://picsum.photos/seed/mem7/600/400',
  'https://picsum.photos/seed/mem8/600/400',
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
