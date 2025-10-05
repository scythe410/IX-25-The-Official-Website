import React from 'react';

const journeyEvents = [
  { title: 'REGISTRATIONS OPEN', description: 'Mark your calendars! The journey begins now. Form your teams and sign up.' },
  { title: 'WORKSHOP SERIES', description: 'A series of workshops to equip you with the necessary skills.' },
  { title: 'IDEA SUBMISSION', description: 'Submit your groundbreaking ideas and get ready for the first evaluation.' },
  { title: 'PRELIMINARY ROUND', description: 'Shortlisted teams will present their initial concepts to our judges.' },
  { title: 'SEMI FINALS', description: 'The competition heats up as teams present their developed prototypes.' },
  { title: 'MENTORING', description: 'Intensive one-on-one sessions with industry experts.' },
  { title: 'FINAL ROUND', description: 'The ultimate showdown. Pitch your startup for the grand prize.' },
];

const Journey = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow">THE JOURNEY OF CODESPRINT X</h2>
      <div className="relative max-w-2xl mx-auto timeline-line">
        {journeyEvents.map((event, index) => (
          <div key={index} className="mb-8 flex justify-between items-center w-full">
            <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'md:hidden'}`}></div>
            <div className="z-20 flex items-center order-1 bg-cyan-500 shadow-xl w-4 h-4 rounded-full"></div>
            <div className={`order-1 w-5/12 p-4 rounded-lg shadow-xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <h3 className="font-bold text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
