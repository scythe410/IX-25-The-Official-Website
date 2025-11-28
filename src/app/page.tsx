
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus, FaLinkedin } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Marquee from '@/components/Marquee';
import Navbar from '@/components/Navbar';
import MemoriesCarousel from '@/components/MemoriesCarousel';
import ScrollTextReveal from '@/components/ScrollTextReveal';
import { Mail, Linkedin, Phone } from 'lucide-react';
import PageClientEffects from '@/components/PageClientEffects';
import Counter from '@/components/Counter';
import { useGlitch } from 'react-powerglitch';
import RoundsCarousel from '@/components/RoundsCarousel';

const FAQItem = ({ item, isOpen, onToggle }: { item: { question: string; answer: string }, isOpen: boolean, onToggle: () => void }) => {
    return (
        <div className="border-b border-gray-800 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={onToggle}
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [registrationsClosed, setRegistrationsClosed] = useState(false);
  const glitch = useGlitch({
    playMode: 'manual',
    glitchTimeSpan: {
      start: 0,
      end: 0.5,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 8,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.2,
      hueRotate: false,
    },
  });

  const handleRegisterClick = () => {
    if (registrationsClosed) return;
    glitch.startGlitch();
    setTimeout(() => {
      setRegistrationsClosed(true);
      glitch.stopGlitch();
    }, 500);
  };


    const faqData = [
    { question: 'HOW MANY MEMBERS PER TEAM?', answer: '3-6 members' },
    { question: 'WHO CAN JOIN IX?', answer: 'The competition is open to all university undergraduates across the country.' },
    { question: 'WHAT CAN PARTICIPANTS BUILD?', answer: 'You are expected to design a solution for a given problem. This is a designathon, so the focus is on UI/UX, not coding.' },
    { question: 'IS CODING REQUIRED BEFOREHAND?', answer: 'No coding experience is required. This is a design-focused competition.' },
    { question: 'ARE CROSS UNIVERSITY TEAMS ALLOWED?', answer: 'No. Each team should consist of members representing a single university.' },
    { question: 'IS PHYSICAL ATTENDANCE REQUIRED?', answer: 'Phase one is not physical, while phase two requires physical attendance.' },
    { question: 'WILL I GET A CERTIFICATE?', answer: 'When you participate in phase one, you will get the participant certificate.' },
    { question: 'HOW TO REGISTER FOR IX?', answer: 'You can register for free by clicking the "Register" button on our website.' },
  ];


  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const partners = [
    { name: 'IFS', logo: '/images/ifsab.png' },
    { name: 'Westfield Campus', logo: '/images/Westfield Campus.png' },
  ];

  const roadmapEvents = [
    { date: '23rd Oct', title: 'REGISTRATIONS OPEN', description: 'Kickstart your IX journey! Sign up and join the innovation challenge.', completed: true },
    { date: '10th Nov', title: 'WORKSHOP 01', description: 'Gain insights and skills to shape your innovative ideas.', completed: true },
    { date: '14th Nov', title: 'REGISTRATIONS CLOSING', description: 'Last call to register and be part of the competition.', completed: true },
    { date: '15th Nov', title: 'INTRODUCTORY SESSION', description: 'Get to know the competition, teams, and what lies ahead.', completed: true },
    { date: '16th Nov', title: 'SUBMISSIONS OPENING', description: 'Begin submitting your creative and technical solutions.' , completed: true },
    { date: '22nd Nov', title: 'WORKSHOP 02', description: 'Level up your project with expert guidance and feedback.' , completed: true },
    { date: '26th Nov', 'title': 'SUBMISSIONS CLOSING', description: 'Deadline to showcase your innovation—make it count!', completed: true },
    { date: '28th Nov', 'title': 'CHOOSING FINALISTS', description: 'Top teams are selected to move on to the grand stage.' },
    { date: '29th Nov', title: 'WORKSHOP 03', description: 'Final preparation and mentoring before the finale.' },
    { date: '06-07th Dec', title: 'GRAND FINALE', description: 'The ultimate showdown—present, pitch, and conquer!' },
  ];

  const aboutText = "IX is Sri Lanka’s first-ever inter-university designathon an event where undergraduates tackle real-world problems through innovative design solutions. Over the years, it has grown into one of the country’s most prestigious UI/UX events. IX 25, organized by the IEEE Student Branch of IIT, marks the fifth wave of Sri Lanka’s pioneering AI and XR Designathon. This edition explores gesture-based spatial interfaces, wearable technology, self-generative UIs, and 3D interactivity. Conducted in two phases, participants first present creative UI/UX concepts, with the top teams advancing to a 36-hour designathon to bring their ideas to life. Evolving beyond a competition, IX has become a platform that nurtures innovation, creativity, and design excellence empowering the next generation to shape the future of digital experiences in Sri Lanka.";


  const contacts = [
    { name: 'Ramiru De Silva', role: "Project Co-Chairperson – IX'25", image: '/images/ramiru_new.png', email: 'nissanka.20240835@iit.ac.lk', phone: '+94701258369', linkedin: 'https://www.linkedin.com/in/ramirudesilva/' },
    { name: 'Daniru Senaratne', role: "Project Co-Chairperson – IX 25", image: '/images/daniru_new.jpg', email: 'daniru.20232126@iit.ac.lk', phone: '+94774965624', linkedin: 'https://www.linkedin.com/in/daniru-senarathne/' },
    { name: 'Pavithma Fernando', role: "Program Vice Chair – IX'25", image: '/images/pavithma_new.jpg', email: 'pavithma.20240349@iit.ac.lk', phone: '+94742912929', linkedin: 'https://www.linkedin.com/in/pavithma-fernando-1a8468324/' },
    { name: 'Damithu Fonseka', role: "Program Vice Chair – IX'25", image: '/images/damithu_new.png', email: 'damithu.20240185@iit.ac.lk', phone: '+94701117578', linkedin: 'https://www.linkedin.com/in/damithufonseka/' },
  ];

  const stats = [
    { value: 200, suffix: 'K+', label: 'PRIZEPOOL' },
    { value: 21, suffix: '+', label: 'UNIVERSITIES' },
    { value: 160, suffix: '+', label: 'TEAMS' },
    { value: 1500, suffix: '+', label: 'PARTICIPANTS' },
  ];

  return (
    <>
      <PageClientEffects />
      <div className="overflow-x-hidden font-tommy">
      <Navbar />
      <main className="min-h-screen text-white dot-grid-background pb-24">
        
        <div className="relative text-center z-0" aria-hidden="true">
          <h1 className="text-[25vw] md:text-[20vw] font-bold text-white/10" style={{ transform: 'translateY(-50%)' }}>
              DESIGNATHON
          </h1>
        </div>

        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 -mt-[40vw] md:-mt-[30vw]">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-center h-64 md:h-96">
                <Image
                  src="/images/Designathon bg video 1.gif"
                  alt="Abstract animation for IX 25 Designathon"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain"
                  data-ai-hint="abstract illustration vaporwave"
                  priority
                />
            </div>
            <div className="text-center md:text-left md:pl-16">
                <p className="text-lg md:text-2xl text-gray-300">06 &amp; 07 DEC 2025</p>
                <h1 className="text-7xl md:text-9xl font-bold my-2 -space-y-2 md:-space-y-4">
                    <span className="text-[#FF0879]">DESIGN</span>
                    <br />
                    <span className="font-tommy-outline">ATHON</span>
                </h1>
                <p className="text-xl md:text-3xl font-bold text-gray-200 tracking-wider">
                    BIGGER<span className="text-[#ACD5F8]">.</span> GRANDER<span className="text-[#ACD5F8]">.</span> WILDER<span className="text-[#ACD5F8]">.</span>
                </p>
                <div className="flex justify-center md:justify-start gap-8 md:gap-12 mt-8">
                    <div>
                        <p className="text-4xl md:text-5xl font-bold text-[#FF0879]">36</p>
                        <p className="text-sm md:text-base text-gray-400">HOURS</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-bold text-[#FF0879]">200K</p>
                        <p className="text-sm md:text-base text-gray-400">PRIZEPOOL</p>
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
            viewport={{ once: false }}
            variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">WHAT IS <span className="font-tommy-outline text-[#FF0879]">IX 25?</span></h2>
          <div className="space-y-6">
            <ScrollTextReveal text={aboutText} />
          </div>
        </motion.section>

        <Marquee text="IX 25" />
        
        {/* Prizes */}
        <motion.section
            className="py-20 text-center relative px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2" aria-hidden="true">
                <h2 className="text-[20vw] md:text-[15vw] font-bold text-gray-800/50 opacity-20 whitespace-nowrap">
                    PRIZE POOL
                </h2>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8 container mx-auto">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-5xl md:text-7xl font-bold heading-gradient">
                            <Counter to={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-base md:text-lg text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </motion.section>


        {/* Registration */}
        <motion.section
          className="py-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/registrations.png"
                alt="Futuristic illustration for IX 25 registrations"
                fill
                className="object-cover"
                data-ai-hint="abstract illustration futuristic"
              />
            </div>
            <div className="relative text-center md:text-left">
              <div className="absolute inset-0 flex items-center justify-center -z-10" aria-hidden="true">
                <h2 className="text-[12vw] lg:text-[8vw] font-bold text-gray-800/50 opacity-50 whitespace-nowrap leading-none">
                  BIGGER. GRANDER. WILDER.
                </h2>
              </div>
              <div className="relative gradient-border-wrapper inline-block p-0.5 rounded-md mb-8">
                 <button
                    ref={glitch.ref}
                    onClick={handleRegisterClick}
                    disabled={registrationsClosed}
                    className="px-8 py-3 md:px-10 md:py-4 bg-black text-white font-bold rounded-md hover:bg-black/80 transition-colors duration-300 button-glow text-xl md:text-2xl disabled:cursor-not-allowed"
                  >
                    <span className={`text-glow relative ${registrationsClosed ? 'line-through' : ''}`}>
                      REGISTER NOW
                    </span>
                  </button>
              </div>
              
              <p className="text-xl md:text-2xl font-bold">
                APPLICATIONS CLOSES ON
              </p>
              <p className="text-5xl md:text-7xl font-bold text-[#ACD5F8]">
                NOVEMBER 14TH
              </p>
              
            </div>
          </div>
        </motion.section>

        {/* Rounds Section */}
        <motion.section
          className="py-20 px-4 md:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <div className="bg-transparent">
            <RoundsCarousel />
          </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section
          className="py-20 container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">DESIGNATHON <span className="font-tommy-outline">ROADMAP</span></h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700/50" aria-hidden="true"></div>

            {roadmapEvents.map((event, index) => (
              <div key={index} className="relative flex items-center mb-8 md:justify-between w-full">
                {/* Desktop: Alternating layout */}
                {index % 2 === 0 ? (
                  <>
                    <div className="hidden md:flex w-5/12"></div>
                    <div className="hidden md:flex w-1/12 justify-center" aria-hidden="true">
                      <div className="w-4 h-4 rounded-full bg-gray-900 border-2 border-white box-glow"></div>
                    </div>
                    <div className="w-full md:w-5/12 ml-8 md:ml-0">
                       <div className="electric-border-wrapper p-0.5">
                           <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl">
                               <p className="text-2xl font-bold text-[#FF0879] mb-3">{event.date}</p>
                               <h3 className={`font-bold text-xl mb-3 text-white tracking-widest ${event.completed ? 'line-through' : ''}`}>{event.title}</h3>
                               <div className="h-1 w-12 bg-gradient-to-r from-[#FF0879] to-[#ACD5F8] mb-4"></div>
                               <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                           </div>
                       </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-5/12 md:text-right ml-8 md:ml-0">
                       <div className="electric-border-wrapper p-0.5">
                           <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl">
                               <p className="text-2xl font-bold text-[#FF0879] mb-3">{event.date}</p>
                               <h3 className={`font-bold text-xl mb-3 text-white tracking-widest ${event.completed ? 'line-through' : ''}`}>{event.title}</h3>
                               <div className="h-1 w-12 bg-gradient-to-r from-[#FF0879] to-[#ACD5F8] mb-4 md:ml-auto"></div>
                               <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                           </div>
                       </div>
                    </div>
                    <div className="hidden md:flex w-1/12 justify-center" aria-hidden="true">
                       <div className="w-4 h-4 rounded-full bg-gray-900 border-2 border-white box-glow"></div>
                    </div>
                    <div className="hidden md:flex w-5/12"></div>
                  </>
                )}
                 {/* Mobile: Central dot */}
                <div className="md:hidden absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-900 border-2 border-white box-glow" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Memories */}
        <motion.section 
            className="py-20 text-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-gradient px-4">
                GLIMPSE INTO THE MEMORIES WE
                <br />
                 <span className="font-tommy-outline">HAVE CREATED.</span>
            </h2>
            <MemoriesCarousel />
            <p className="mt-8 text-gray-500">IX 24 Memories</p>
        </motion.section>


        {/* FAQ */}
        <motion.section
            id="faq"
            className="container mx-auto px-6 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient text-center">
                    FREQUENTLY ASKED <span className="font-tommy-outline">QUESTIONS</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-x-8">
                  {faqData.map((item, index) => (
                    <FAQItem 
                      key={index} 
                      item={item} 
                      isOpen={openFaqIndex === index}
                      onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
                    />
                  ))}
                </div>
            </div>
        </motion.section>

        {/* Contact Us */}
        <motion.section
            className="py-20 container mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">CONTACT <span className="font-tommy-outline">US</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contacts.map((contact, index) => (
              <div key={index} className="group">
                <div className="gradient-border-wrapper">
                    <div className="bg-black/80 backdrop-blur-sm text-center h-full flex flex-col p-6">
                        <div className="relative w-full h-48 mb-4 self-center">
                          <Image
                            src={contact.image}
                            alt={`Portrait of ${contact.name}`}
                            fill
                            className="rounded-xl object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            data-ai-hint="person portrait"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold tracking-wider">{contact.name}</h3>
                          <p className="text-sm text-gray-400 mb-4">{contact.role}</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-auto">
                          <a href={`mailto:${contact.email}`} aria-label={`Email ${contact.name}`} className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0879] transition-colors">
                            <Mail className="w-5 h-5" />
                          </a>
                          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${contact.name}`} className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0879] transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a href={`tel:${contact.phone}`} aria-label={`Call ${contact.name}`} className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0879] transition-colors">
                            <Phone className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                      <div className="gradient-border-corner absolute -top-px -left-px"></div>
                      <div className="gradient-border-corner absolute -top-px -right-px"></div>
                      <div className="gradient-border-corner absolute -bottom-px -left-px"></div>
                      <div className="gradient-border-corner absolute -bottom-px -right-px"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Partners */}
        <motion.section
            className="py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
                PARTNERING <span className="font-tommy-outline">WITH</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-5xl mx-auto px-4">
                {partners.map((partner, index) => (
                    <div key={partner.name}>
                        <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={120}
                            height={50}
                            className="object-contain transition-all duration-300"
                            data-ai-hint="company logo"
                        />
                    </div>
                ))}
            </div>
        </motion.section>
        
        {/* Venue */}
        <motion.section
            className="py-10 text-center relative min-h-[60vh] flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
            <div className="absolute inset-0">
                <Image
                    src="/images/building_overlay_bg.png"
                    alt="Stylized overlay of the Informatics Institute of Technology building"
                    fill
                    className="object-cover w-full opacity-20"
                    data-ai-hint="cityscape illustration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
             <div className="relative z-10 px-4">
                 <h2 className="text-3xl md-text-4xl font-bold mb-4 heading-gradient">DESIGNATHON <span className="font-tommy-outline">VENUE</span></h2>
                 <p className="text-lg md:text-xl text-gray-300">Informatics Institute of Technology</p>
                 <p className="text-sm md:text-base text-gray-400">GP Square, Colombo 04</p>
             </div>
        </motion.section>
        
        <motion.footer 
            className="py-8 border-t border-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className='relative w-32 md:w-40 h-12'>
                    <Image src="/images/BlueSBLogo 1.svg" alt="IEEE Student Branch of IIT Logo" fill style={{objectFit: 'contain'}} data-ai-hint="college logo" />
                </div>
                <p className="text-xs md:text-sm text-gray-500 text-center">Copyright 2025 IEEE Student Branch of IIT. All Rights Reserved</p>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/ieeeinformatics" aria-label="Facebook page for IEEE Student Branch of IIT"><FaFacebook className="text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer" /></a>
                  <a href="https://www.linkedin.com/company/ieeesbiit/" aria-label="LinkedIn page for IEEE Student Branch of IIT"><FaLinkedin className="text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer" /></a>
                  <a href="https://www.instagram.com/ieeeiit/#" aria-label="Instagram page for IEEE Student Branch of IIT"><FaInstagram className="text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer" /></a>
                </div>
            </div>
        </motion.footer>

      </main>
      </div>
    </>
  );
}
