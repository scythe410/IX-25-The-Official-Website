import React from 'react';

const Marquee = () => {
  const marqueeText = "IX '25 • ";
  return (
    <div className="relative my-12 -rotate-3 font-anton">
      <div className="absolute inset-0 bg-blue-300 transform -rotate-1"></div>
      <div className="relative flex overflow-x-hidden bg-pink-500 text-black py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">{marqueeText.repeat(15)}</span>
          <span className="text-4xl mx-4">{marqueeText.repeat(15)}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
