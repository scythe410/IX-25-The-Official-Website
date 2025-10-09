'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Preloader from '@/components/Preloader';
import Marquee from '@/components/Marquee';

const FAQItem = ({ item, index }: { item: { question: string; answer: string }, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-semibold text-lg flex items-center gap-4">
                    {item.question}
                </h3>
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {isOpen && <p className="mt-4 text-gray-400 pl-8">{item.answer}</p>}
        </div>
    );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const faqData = [
    { question: 'WHAT IS THE TEAM SIZE?', answer: 'Teams can consist of 2 to 4 members.' },
    { question: 'WHAT IS EXPECTED TO BE BUILD?', answer: 'You are expected to design a solution for a given problem within 12 hours. No coding is involved.' },
    { question: 'HOW CAN I GET SHORTLISTED?', answer: 'Shortlisting is based on submissions and previous designs.' },
    { question: 'IS THERE A REGISTRATION FEE?', answer: 'No, participation is completely free of charge.' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const partners = ['Devfolio', 'polygon', 'replit', 'SOLANA', 'Filecoin'];

  return (
    <>
      {loading && <Preloader />}
      <div className="overflow-x-hidden font-vt323">
      <main className="min-h-screen text-white dot-grid-background">
        
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl text-gray-300">28 & 29 FEB 2024</p>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter my-2">
                    <span className="heading-gradient">design</span>
                    <br />
                    athon
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-gray-200 tracking-wider">BIGGER. GRANDER. WILDER.</p>
                <div className="flex justify-center md:justify-start gap-12 mt-8">
                    <div>
                        <p className="text-5xl font-bold heading-gradient">12</p>
                        <p className="text-gray-400">HOURS</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold heading-gradient">20K</p>
                        <p className="text-gray-400">PRIZEPOOL</p>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center items-center h-96">
                <Image
                  src="https://picsum.photos/seed/designathon/600/400"
                  alt="Designathon Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain"
                  data-ai-hint="abstract illustration"
                />
            </div>
          </div>
        </section>

        {/* About */}
        <motion.section 
            id="about" 
            className="container mx-auto px-6 py-16 text-center max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="heading-gradient">WHAT IS</span> DESIGNATHON?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            An in-person action packed design hackathon where students and aspiring designers are given a platform to experience real-life design problems and master the art of creating usable, viable, and empathetic design solutions while having a great deal of fun for 12 hours straight.
          </p>
        </motion.section>

        <Marquee text="DESIGNATHON '24" />
        
        {/* Prizes */}
        <motion.section
            className="py-20 container mx-auto px-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-400 uppercase tracking-widest">TITLE WINNER</p>
                    <p className="text-5xl md:text-6xl font-bold heading-gradient">10,000 INR</p>
                </div>
                 <div className="text-center">
                    <p className="text-gray-400 uppercase tracking-widest">FIRST RUNNERS UP</p>
                    <p className="text-5xl md:text-6xl font-bold heading-gradient">5,000 INR</p>
                </div>
                 <div className="text-center">
                    <p className="text-gray-400 uppercase tracking-widest">SECOND RUNNERS UP</p>
                    <p className="text-5xl md:text-6xl font-bold heading-gradient">3,000 INR</p>
                </div>
            </div>
        </motion.section>


        {/* Registration */}
        <motion.section
            className="py-20 text-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                <h1 className="text-[20vw] font-bold text-gray-800/50 opacity-50 whitespace-nowrap">
                    BIGGER. GRANDER. WILDER.
                </h1>
            </div>
            <div className="relative z-10">
                <button className="px-8 py-3 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors duration-300 button-glow text-xl">
                    REGISTER FOR FREE
                </button>
                <p className="mt-4 text-xl font-bold">APPLICATIONS CLOSES ON <span className="text-pink-400">FEBRUARY 20TH</span></p>
                <button className="mt-2 px-6 py-2 border border-gray-600 text-gray-300 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
                    Apply with Devfolio
                </button>
            </div>
        </motion.section>
        
        {/* Venue */}
        <motion.section
            className="py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
             <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="heading-gradient">HACKATHON</span> VENUE</h2>
             <p className="text-xl text-gray-300">CHRIST COLLEGE OF ENGINEERING</p>
             <p className="text-gray-400">IRINJALAKUDA, THRISSUR, KERALA</p>
             <div className="mt-4 h-32 w-full bg-gray-900/50 max-w-4xl mx-auto rounded-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500">Building Illustration</p>
             </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section 
            className="py-20 container mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold"><span className="heading-gradient">HACKATHON</span> ROADMAP</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto text-center md:text-left">
              {[
                { date: '05th FEBRUARY', description: 'Registration for DESIGNATHON 24 starts through Devfolio.' },
                { date: '20th FEBRUARY', description: 'Registration for DESIGNATHON 24 comes to an end.' },
                { date: '22nd FEBRUARY', description: 'Shortlisting based on submissions and previous designs.' },
                { date: '24th FEBRUARY', description: 'Shortlisted Participants are informed via emails.' },
                { date: '28th FEBRUARY', description: 'DESIGNATHON 24 begins at 08 PM in the evening.' },
                { date: '29th FEBRUARY', description: 'Valedictory ceremony of DESIGNATHON 24.' },
              ].map((event, index) => (
                <div key={index}>
                    <h3 className="font-bold text-2xl mb-2 text-pink-400">{event.date}</h3>
                    <p className="text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
        </motion.section>

        {/* Memories */}
        <motion.section 
            className="py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                GLIMPSE INTO THE <span className="heading-gradient">MEMORIES</span> WE
                <br />
                 HAVE CREATED.
            </h2>
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://picsum.photos/seed/mem1/400/400',
                'https://picsum.photos/seed/mem2/400/400',
                'https://picsum.photos/seed/mem3/400/400',
                'https://picsum.photos/seed/mem4/400/400',
              ].map((src, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-ai-hint="hackathon photos"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-500">The Previous Edition of DESIGNATHON by CODe</p>
        </motion.section>


        {/* FAQ */}
        <motion.section 
            id="register" 
            className="py-20 container mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                     <Image
                        src="https://picsum.photos/seed/faq-retro-computer/600/400"
                        alt="Retro computer"
                        width={600}
                        height={400}
                        className="rounded-lg"
                        data-ai-hint="retro computer"
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <span className="heading-gradient">FREQUENTLY ASKED</span> QUESTIONS
                    </h2>
                    <div className="space-y-4">
                      {faqData.map((item, index) => (
                        <FAQItem key={index} item={item} index={index} />
                      ))}
                    </div>
                </div>
            </div>
        </motion.section>

        {/* Partners */}
        <motion.section
            className="py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="heading-gradient">PARTNERING</span> WITH
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
                {partners.map(partner => (
                    <div key={partner} className="text-gray-400 text-2xl font-bold">{partner}</div>
                ))}
            </div>
        </motion.section>

        
        <motion.footer 
            className="py-8 border-t border-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className='flex items-center gap-4'>
                    <Image src="https://picsum.photos/seed/christ-logo/100/100" alt="Christ College Logo" width={50} height={50} data-ai-hint="college logo" />
                    <p className="text-sm text-gray-500">CHRIST COLLEGE OF ENGINEERING</p>
                </div>
                <p className="text-sm text-gray-500 text-center">Copyright &copy; 2024 Community Of Developers (CODe). All Rights Reserved</p>
                <div className="flex gap-6">
                  <FaFacebook className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaTwitter className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaInstagram className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>
        </motion.footer>

      </main>
      </div>
    </>
  );
}
