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
import { Mail, Linkedin, Phone } from 'lucide-react';
import IXLogo from '@/components/IXLogo';

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
  
  const partners = [
    { name: 'IFS', logo: '/images/ifs.png' },
    { name: 'Polygon', logo: 'https://picsum.photos/seed/polygon/150/60' },
    { name: 'Replit', logo: 'https://picsum.photos/seed/replit/150/60' },
    { name: 'Solana', logo: 'https://picsum.photos/seed/solana/150/60' },
    { name: 'Filecoin', logo: 'https://picsum.photos/seed/filecoin/150/60' },
  ];

  const roadmapEvents = [
    { date: '15th Aug', title: 'REGISTRATIONS OPEN', description: 'Registrations Open' },
    { date: '03rd Sep', title: 'IDEATE REGISTRATIONS OPEN', description: 'Registrations close' },
    { date: '06th Sep', title: 'GRAND FINALE', description: 'Introductory session' },
    { date: '08th Sep', title: 'SUBMISSIONS OPEN', description: 'Submissions Opening' },
    { date: '09th Sep', title: 'WORKSHOP 01', description: 'workshop 01' },
    { date: '12th Sep', title: 'WORKSHOP 02', description: 'workshop 02' },
    { date: '20th Oct', title: 'SUBMISSIONS CLOSING', description: 'Submissions Closing' },
    { date: '22nd Oct', title: 'ANNOUNCING FINALISTS', description: 'Announcing Finalists' },
    { date: '29th - 30th Nov', title: 'GRAND FINALE', description: 'Grand Finale' },
  ];

  const aboutText = "IX is the first-ever virtual inter-university designathon organized in Sri Lanka. event where teams of students, professionals, and technology enthusiasts come together to solve real-world problems using innovative design solutions. With the success of IX in the past years, it has been recognized as one of the most prestigious design events in Sri Lanka. IX 24, the fourth edition of Sri Lanka’s pioneering inter-university designathon, spotlighted extended reality (XR), spatial UI, and AI-driven design. Over two phases, participants first presented innovative UI/UX concepts, with the top 10 teams advancing to a 24-hour designathon. The competition fostered creativity, collaboration, and future-focused problem-solving, empowering students to push design boundaries. The top three teams were celebrated for their ingenuity, practicality, and impactful solutions, solidifying IX 24 as a leading platform for visionary design in Sri Lanka.";

  const contacts = [
    { name: 'Ramiru De Silva', role: "Project Co-Chairperson – IX'25", image: '/images/ramiru.png', email: 'nissanka.20240835@iit.ac.lk', phone: '+94701258369' },
    { name: 'Daniru Senaratne', role: "Project Co-Chairperson – IX 25", image: '/images/daniru.png', email: 'daniru.20232126@iit.ac.lk', phone: '+94774965624' },
    { name: 'Pavithma Fernando', role: "Program Vice Chair – IX'25", image: '/images/pavithma.png', email: 'pavithma.20240349@iit.ac.lk', phone: '+94742912929' },
    { name: 'Damithu Fonseka', role: "Program Vice Chair – IX'25", image: '/images/damithu.png', email: 'damithu.20240185@iit.ac.lk', phone: '+94701117578' },
  ];


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
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-8 container mx-auto">
                <div className="text-center">
                    <p className="text-6xl md:text-7xl font-bold heading-gradient font-chakra">200K+</p>
                    <p className="text-lg text-gray-400 uppercase tracking-widest font-chakra mt-2">PRIZEPOOL</p>
                </div>
                <div className="text-center">
                    <p className="text-6xl md:text-7xl font-bold heading-gradient font-chakra">25+</p>
                    <p className="text-lg text-gray-400 font-chakra mt-2">UNIVERSITIES</p>
                </div>
                <div className="text-center">
                    <p className="text-6xl md:text-7xl font-bold heading-gradient font-chakra">260+</p>
                    <p className="text-lg text-gray-400 font-chakra mt-2">TEAMS</p>
                </div>
                <div className="text-center">
                    <p className="text-6xl md:text-7xl font-bold heading-gradient font-chakra">1100+</p>
                    <p className="text-lg text-gray-400 font-chakra mt-2">PARTICIPANTS</p>
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
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700/50"></div>

              {roadmapEvents.map((event, index) => (
                <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 box-glow">
                      <h3 className="font-bold text-xl mb-3 text-white tracking-widest font-chakra">{event.title}</h3>
                      <div className={`h-1 w-12 bg-gradient-to-r from-[#FF0879] to-[#ACD5F8] mb-4 ${index % 2 === 0 ? 'ml-auto' : ''}`}></div>
                      <p className="text-sm text-gray-400 font-bold font-chakra mb-2">{event.date}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 border-2 border-white box-glow"></div>
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
            id="faq"
            className="container mx-auto px-6 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-chakra heading-gradient text-center">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="space-y-4">
                  {faqData.map((item, index) => (
                    <FAQItem key={index} item={item} index={index} />
                  ))}
                </div>
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
            <div className="absolute inset-0">
                <Image
                    src="/images/venue.jpg"
                    alt="Informatics Institute of Technology Background"
                    layout="fill"
                    className="object-cover w-full opacity-20"
                    data-ai-hint="building illustration"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
             <div className="relative z-10">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chakra heading-gradient">DESIGNATHON VENUE</h2>
                 <p className="text-xl text-gray-300 font-chakra">Informatics Institute of Technology</p>
                 <p className="text-gray-400 font-chakra">GP Square, Colombo 04</p>
             </div>
        </motion.section>

        {/* Contact Us */}
        <motion.section
            className="py-20 container mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chakra heading-gradient">CONTACT US</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contacts.map((contact, index) => (
              <div key={index} className="gradient-border-wrapper">
                <div className="gradient-border-corner -top-1 -left-1"></div>
                <div className="gradient-border-corner -top-1 -right-1"></div>
                <div className="gradient-border-corner -bottom-1 -left-1"></div>
                <div className="gradient-border-corner -bottom-1 -right-1"></div>

                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 text-center h-full flex flex-col">
                  <div className="relative inline-block mb-4 self-center">
                    <div className="p-1 rounded-2xl box-glow bg-gray-900">
                      <Image
                        src={contact.image}
                        alt={`Portrait of ${contact.name}`}
                        width={400}
                        height={500}
                        className="rounded-xl object-cover w-full h-auto"
                        data-ai-hint="person portrait"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-turret tracking-wider">{contact.name}</h3>
                    <p className="text-gray-400 font-chakra mb-4">{contact.role}</p>
                  </div>
                  <div className="flex justify-center gap-4 mt-auto">
                    <a href={`mailto:${contact.email}`} aria-label="Email" className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0879] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0879] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`tel:${contact.phone}`} aria-label="Phone" className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0879] transition-colors">
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
                {partners.map((partner, index) => (
                    <div key={partner.name}>
                        <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={150}
                            height={60}
                            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            data-ai-hint="company logo"
                        />
                    </div>
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
                    <p className="text-sm text-gray-500 font-chakra">IEEE Student Branch of IIT</p>
                </div>
                <p className="text-sm text-gray-500 text-center">Copyright 2025 IX 25'. All Rights Reserved</p>
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
