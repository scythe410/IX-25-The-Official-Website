import React from 'react';
// Replace these with your actual sponsor logos
const sponsors = ['Sponsor1', 'Sponsor2', 'Sponsor3', 'Sponsor4', 'Sponsor5'];

const Sponsors = () => {
  return (
    <div className="py-12 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-bold tracking-[0.3em] text-gray-400 mb-8">PROUDLY SPONSORED BY</h3>
        <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
          {sponsors.map((sponsor) => (
            <div key={sponsor} className="text-gray-500 text-2xl font-semibold opacity-60 hover:opacity-100 transition-opacity">
              {/* Replace this div with an <Image> component for each sponsor logo */}
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
