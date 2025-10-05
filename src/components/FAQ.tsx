'use client'

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    { question: 'Who is eligible for what?', answer: 'The competition is open to all university undergraduates across the country.' },
    { question: 'Can we participate as a team?', answer: 'Teams can consist of 2 to 4 members.' },
    { question: 'What if we don\'t have a team?', answer: 'No, participation in CodeSprint X is completely free of charge.' },
    { question: 'Is there a registration fee?', answer: 'Projects will be judged on innovation, technical complexity, business viability, and presentation quality.' },
    { question: 'Do we have to be present physically?', answer: 'The competition is open to all university undergraduates across the country.' },
    { question: 'How to register for CodeSprint X?', answer: 'Teams can consist of 2 to 4 members.' },
];

const FAQItem = ({ item, index }: { item: { question: string; answer: string }, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-semibold text-lg flex items-center gap-4">
                    <span className="text-gray-500">0{index + 1}</span>
                    {item.question}
                </h3>
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {isOpen && <p className="mt-4 text-gray-400 pl-8">{item.answer}</p>}
        </div>
    );
};


const FAQ = () => {
  return (
    <section className="py-20 container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
