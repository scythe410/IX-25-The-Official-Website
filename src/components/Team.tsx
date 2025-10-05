import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { name: 'John Doe', role: 'Lead Judge', image: '/team-1.jpg' },
  { name: 'Jane Smith', role: 'Mentor & Investor', image: '/team-2.jpg' },
  { name: 'Emily White', role: 'Tech Evangelist', image: '/team-3.jpg' },
  { name: 'Michael Brown', role: 'Venture Capitalist', image: '/team-4.jpg' },
];

const Team = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-glow">MEET THE EXPERTS</h2>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-2 border-cyan-400"
              />
            </div>
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-cyan-400 text-sm">{member.role}</p>
            <div className="flex gap-4 mt-2">
              <FaLinkedin className="text-gray-400 hover:text-white" />
              <FaTwitter className="text-gray-400 hover:text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
