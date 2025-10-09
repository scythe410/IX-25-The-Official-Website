import React from 'react';

const Marquee = ({ text }: { text: string }) => {
  const marqueeText = `${text} • `.repeat(15);
  return (
    <div className="relative my-12 -rotate-3 font-vt323">
      <div className="relative flex overflow-x-hidden bg-[#95FF00] text-black py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">{marqueeText}</span>
          <span className="text-4xl mx-4">{marqueeText}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
