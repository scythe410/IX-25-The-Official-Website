import React from 'react';

const Marquee = () => {
  const marqueeText = "IX '25 • ";
  return (
    <div className="relative flex overflow-x-hidden bg-pink-500 text-black py-4 my-12 -rotate-3 font-bebas">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">{marqueeText.repeat(15)}</span>
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">{marqueeText.repeat(15)}</span>
      </div>
    </div>
  );
};

export default Marquee;
