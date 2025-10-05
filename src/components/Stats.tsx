import React from 'react';
import { FaUsers, FaProjectDiagram, FaAward } from 'react-icons/fa';

const stats = [
  { icon: <FaUsers />, value: '2500+', label: 'Participants' },
  { icon: <FaProjectDiagram />, value: '550+', label: 'Teams Registered' },
  { icon: <FaAward />, value: '5M+', label: 'Prize Pool' },
];

const Stats = () => {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl text-cyan-400 mb-3">{stat.icon}</div>
              <p className="text-4xl font-bold text-glow">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
