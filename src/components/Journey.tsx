import React from 'react';

const journeyEvents = [
  { title: 'REGISTRATIONS OPEN', description: 'Mark your calendars! The journey begins now. Form your teams and sign up.' },
  { title: 'IDEATE REGISTRATIONS OPEN', description: 'The Ideathon stage is your chance to shine. Brainstorm ideas, form teams of 2-4 members, and submit your proposal through our platform. All the best!' },
  { title: 'PROTOTYPE REGISTRATIONS OPEN', description: 'It’s time to bring your ideas to life. Develop a functional prototype and submit it for evaluation. This is where your technical skills will be put to the test.' },
  { title: 'TECHNICAL PITCH', description: 'The pitch presentation is the final step. Present your work to our judges, covering the problem, solution, and business model. Make it count!' },
  { title: 'GRAND FINALE', description: 'The moment of truth! The top teams will be announced, and prizes will be awarded. Celebrate your hard work and success with us.' },
];

const Journey = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow">THE JOURNEY OF CODESPRINT X</h2>
      <div className="relative max-w-4xl mx-auto timeline-line">
        {journeyEvents.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
             <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-cyan-500 shadow-xl w-4 h-4 rounded-full"></div>
            <div className={`order-1 w-5/12 p-4 rounded-lg shadow-xl bg-gray-900 bg-opacity-50 box-glow ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <h3 className="font-bold text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
       <div className="text-center mt-12">
          <button className="mt-8 px-8 py-3 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-transform duration-300 button-glow">
            CONTACT US
          </button>
        </div>
    </section>
  );
};

export default Journey;
