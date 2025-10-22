'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Preloader from '@/components/Preloader';
import Marquee from '@/components/Marquee';
import Navbar from '@/components/Navbar';
import MemoriesCarousel from '@/components/MemoriesCarousel';
import ScrollTextReveal from '@/components/ScrollTextReveal';

const FAQItem = ({ item, index }: { item: { question: string; answer: string }, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-semibold text-lg flex items-center gap-4 font-chakra">
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

  const roadmapEvents = [
    { date: '15th Aug', description: 'Registrations Open' },
    { date: '03rd Sep', description: 'Registrations close' },
    { date: '06th Sep', description: 'Introductory session' },
    { date: '08th Sep', description: 'Submissions Opening' },
    { date: '09th Sep', description: 'workshop 01' },
    { date: '12th Sep', description: 'workshop 02' },
    { date: '20th Oct', description: 'Submissions Closing' },
    { date: '22nd Oct', description: 'Announcing Finalists' },
    { date: '29th - 30th Nov', description: 'Grand Finale' },
  ];

  const aboutText = "IX is the first-ever virtual inter-university designathon organized in Sri Lanka. event where teams of students, professionals, and technology enthusiasts come together to solve real-world problems using innovative design solutions. With the success of IX in the past years, it has been recognized as one of the most prestigious design events in Sri Lanka. IX 24, the fourth edition of Sri Lanka’s pioneering inter-university designathon, spotlighted extended reality (XR), spatial UI, and AI-driven design. Over two phases, participants first presented innovative UI/UX concepts, with the top 10 teams advancing to a 24-hour designathon. The competition fostered creativity, collaboration, and future-focused problem-solving, empowering students to push design boundaries. The top three teams were celebrated for their ingenuity, practicality, and impactful solutions, solidifying IX 24 as a leading platform for visionary design in Sri Lanka.";


  return (
    <>
      {loading && <Preloader />}
      <div className="overflow-x-hidden font-turret">
      <Navbar />
      <main className="min-h-screen text-white dot-grid-background pb-24">
        
        <div className="relative text-center z-0">
          <h1 className="text-[20vw] font-bold font-chakra text-white/5" style={{ transform: 'translateY(-50%)' }}>
              DESIGNATHON
          </h1>
        </div>

        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-8 -mt-[30vw]">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-center h-96">
                <Image
                  src="/images/Designathon bg video 1.gif"
                  alt="Designathon Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain"
                  data-ai-hint="abstract illustration vaporwave"
                />
            </div>
            <div className="text-left md:pl-32">
                <p className="text-xl md:text-2xl text-gray-300 font-chakra">06 &amp; 07 DEC 2025</p>
                <h1 className="text-8xl md:text-9xl font-bold my-2 -space-y-4 font-chakra">
                    <span className="text-[#FF0879]">design</span>
                    <br />
                    <span>athon</span>
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-gray-200 tracking-wider font-chakra">
                    BIGGER<span className="text-[#ACD5F8]">.</span> GRANDER<span className="text-[#ACD5F8]">.</span> WILDER<span className="text-[#ACD5F8]">.</span>
                </p>
                <div className="flex justify-start gap-12 mt-8">
                    <div>
                        <p className="text-5xl font-bold text-[#FF0879] font-chakra">36</p>
                        <p className="text-gray-400 font-chakra">HOURS</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold text-[#FF0879] font-chakra">200K</p>
                        <p className="text-gray-400 font-chakra">PRIZEPOOL</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* About */}
        <motion.section 
            id="about" 
            className="container mx-auto px-6 py-16 text-center max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-chakra">WHAT IS <span className="text-[#FF0879]">IX 25'?</span></h2>
          <ScrollTextReveal text={aboutText} />
        </motion.section>

        <Marquee text="IX 25'" />
        
        {/* Prizes */}
        <motion.section
            className="py-20 text-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                <h1 className="text-[15vw] font-bold text-gray-800/50 opacity-20 whitespace-nowrap font-chakra">
                    PRIZE POOL
                </h1>
            </div>
            <div className="relative z-10">
                <p className="text-gray-400 uppercase tracking-widest font-chakra">PRIZE POOL</p>
                <p className="text-7xl md:text-8xl font-bold heading-gradient font-chakra">200,000 LKR</p>
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
                <h1 className="text-[20vw] font-bold text-gray-800/50 opacity-50 whitespace-nowrap font-chakra">
                    BIGGER. GRANDER. WILDER.
                </h1>
            </div>
            <div className="relative z-10">
                <button className="px-8 py-3 bg-[#FF0879] text-white font-bold rounded-md hover:bg-pink-700 transition-colors duration-300 button-glow text-xl font-chakra">
                    REGISTER FOR FREE
                </button>
                <p className="mt-4 text-xl font-bold font-chakra">APPLICATIONS CLOSES ON <span className="text-[#ACD5F8]">NOVEMBER 11TH</span></p>
            </div>
        </motion.section>
        
        {/* Venue */}
        <motion.section
            className="py-20 text-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
             <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chakra heading-gradient">HACKATHON VENUE</h2>
             <p className="text-xl text-gray-300 font-chakra">Informatics Institute of Technology</p>
             <p className="text-gray-400 font-chakra">GP Square, Colombo 04</p>
             <div className="mt-4 max-w-4xl mx-auto h-48 relative">
                <Image
                  src="https://picsum.photos/seed/building-illustration/1024/200"
                  alt="Informatics Institute of Technology"
                  layout="fill"
                  className="rounded-lg object-cover w-full opacity-30"
                  data-ai-hint="building illustration"
                />
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
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-chakra heading-gradient">HACKATHON ROADMAP</h2>
            </div>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

              {roadmapEvents.map((event, index) => (
                <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`p-6 rounded-lg shadow-lg bg-gray-900 box-glow`}>
                      <h3 className="font-bold text-2xl mb-2 text-[#ACD5F8] font-chakra">{event.date}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF0879] border-2 border-white"></div>
                </div>
              ))}
            </div>
        </motion.section>

        {/* Memories */}
        <motion.section 
            className="py-20 text-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-chakra heading-gradient">
                GLIMPSE INTO THE MEMORIES WE
                <br />
                 HAVE CREATED.
            </h2>
            <MemoriesCarousel />
            <p className="mt-8 text-gray-500 font-chakra">IX 24' Memories</p>
        </motion.section>


        {/* FAQ */}
        <motion.section 
            id="register" 
            className="py-20 container mx-auto px-4"
            initial-hidden="true"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                     <Image
                        src="https://picsum.photos/seed/retro-computer/600/400"
                        alt="Retro computer"
                        width={600}
                        height={400}
                        className="rounded-lg"
                        data-ai-hint="retro computer"
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 font-chakra heading-gradient">
                        FREQUENTLY ASKED QUESTIONS
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
            initial-hidden="true"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-chakra heading-gradient">
                PARTNERING WITH
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
                {partners.map(partner => (
                    <div key={partner} className="text-gray-400 text-2xl font-bold font-chakra">{partner}</div>
                ))}
            </div>
        </motion.section>

        
        <motion.footer 
            className="py-8 border-t border-gray-800"
            initial-hidden="true"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className='flex items-center gap-4'>
                    <Image src="https://picsum.photos/seed/christ-logo/100/100" alt="Christ College Logo" width={50} height={50} data-ai-hint="college logo" />
                    <p className="text-sm text-gray-500 font-chakra">CHRIST COLLEGE OF ENGINEERING</p>
                </div>
                <p className="text-sm text-gray-500 text-center">Copyright &amp;copy; 2024 Community Of Developers (CODe). All Rights Reserved</p>
                <div className="flex gap-6">
                  <a href="#" aria-label="Facebook"><FaFacebook className="text-xl text-gray-400 hover:text-white cursor-pointer" /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter className="text-xl text-gray-400 hover:text-white cursor-pointer" /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram className="text-xl text-gray-400 hover:text-white cursor-pointer" /></a>
                </div>
            </div>
        </motion.footer>

      </main>
      </div>
    </>
  );
}
