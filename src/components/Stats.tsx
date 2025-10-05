import React from 'react';
import { Users, Folder, Calendar } from 'lucide-react';

const stats = [
  { icon: <Users />, value: '2400+', label: 'Participants' },
  { icon: <Folder />, value: '550+', label: 'Teams Registered' },
  { icon: <Calendar />, value: '26', label: 'Days' },
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
