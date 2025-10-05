import React from 'react';
import { FaBolt, FaCrosshairs, FaTrophy } from 'react-icons/fa';

const phases = [
  {
    icon: <FaBolt />,
    title: 'WORKSHOP SERIES',
    description: 'Kickstart your journey with expert-led workshops on cutting-edge technologies and business strategies.',
  },
  {
    icon: <FaCrosshairs />,
    title: 'MENTORING',
    description: 'Get paired with industry veterans to refine your idea, strategy, and execution plan.',
  },
  {
    icon: <FaTrophy />,
    title: 'FINALE',
    description: 'Pitch your startup to a panel of esteemed judges and investors for a chance to win the grand prize.',
  },
];

const Phases = () => {
  return (
    <section className="py-20 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">THREE PHASES OF SUCCESS</h2>
      <p className="text-gray-400 mb-16">The structured path from idea to reality.</p>
      <div className="grid md:grid-cols-3 gap-12">
        {phases.map((phase, index) => (
          <div key={index} className="flex flex-col items-center p-8 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-50 box-glow">
            <div className="text-4xl text-cyan-400 mb-4">{phase.icon}</div>
            <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
            <p className="text-gray-400">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Phases;
