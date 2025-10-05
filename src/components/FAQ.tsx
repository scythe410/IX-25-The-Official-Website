'use client'

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    { question: 'Who is eligible to participate?', answer: 'The competition is open to all university undergraduates across the country.' },
    { question: 'What is the team size?', answer: 'Teams can consist of 2 to 4 members.' },
    { question: 'Is there a registration fee?', answer: 'No, participation in CodeSprint X is completely free of charge.' },
    { question: 'What are the judging criteria?', answer: 'Projects will be judged on innovation, technical complexity, business viability, and presentation quality.' },
];

const FAQItem = ({ item }: { item: { question: string; answer: string } }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-semibold text-lg">{item.question}</h3>
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {isOpen && <p className="mt-4 text-gray-400">{item.answer}</p>}
        </div>
    );
};


const FAQ = () => {
  return (
    <section className="py-20 container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">FREQUENTLY ASKED QUESTIONS</h2>
      <div>
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
