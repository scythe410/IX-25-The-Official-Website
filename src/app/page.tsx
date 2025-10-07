'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Lightbulb, Gem, Rocket } from 'lucide-react';
import { Users, Folder, Calendar } from 'lucide-react';
import Image from 'next/image';
import Preloader from '@/components/Preloader';
import IXLogo from '@/components/IXLogo';

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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', idea: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', idea: '' });
  }
  
  const faqData = [
    { question: 'Who is eligible for what?', answer: 'The competition is open to all university undergraduates across the country.' },
    { question: 'Can we participate as a team?', answer: 'Teams can consist of 2 to 4 members.' },
    { question: 'What if we don\'t have a team?', answer: 'No, participation in CodeSprint X is completely free of charge.' },
    { question: 'Is there a registration fee?', answer: 'Projects will be judged on innovation, technical complexity, business viability, and presentation quality.' },
    { question: 'Do we have to be present physically?', answer: 'The competition is open to all university undergraduates across the country.' },
    { question: 'How to register for CodeSprint X?', answer: 'Teams can consist of 2 to 4 members.' },
];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {loading && <Preloader />}
      <main className="min-h-screen text-white font-mont dot-grid-background">
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-8 md:px-16 bg-black bg-opacity-30 backdrop-blur-sm">
          <h1 className="text-2xl font-bold tracking-widest text-glow font-orbit">CODESPRINT X</h1>
          <button className="px-6 py-2 border border-pink-500 text-pink-500 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-300 button-glow">
            REGISTER
          </button>
        </nav>
        
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute -top-16 -left-16 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -10, 20, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

          <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold tracking-wider leading-tight text-glow font-orbit">
                Design Beyond
                <br />
                Ordinary.
                </h1>
                <p className="mt-6 text-gray-300 max-w-lg mx-auto md:mx-0">
                Do you feel that? The calm before the storm...
                </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
                <IXLogo />
            </div>
          </div>
        </section>

        {/* About / Battle section */}
        <motion.section 
            id="about" 
            className="container mx-auto px-6 py-14 lg:py-24 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0, 20, 0],
              y: [0, 15, -10, 15, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-80 h-80 bg-gradient-to-tr from-gray-800/80 to-gray-700/40 rounded-2xl p-6">
                <img src="/helmet.png" alt="helmet" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 bg-pink-900/70 text-pink-300 rounded-full text-sm uppercase font-semibold tracking-wider mb-4">
                  About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-orbit">THE BATTLE FOR STARTUP BRILLIANCE</h2>
                <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">CodeSprint X is Sri Lanka's premier inter-university startup battle, designed to ignite innovation and empower the next generation of entrepreneurs. Organized by the IEEE Student Branch of IIT, this flagship event is where the brightest minds are challenged to turn ideas into impactful real-world solutions.</p>
                 <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">With each edition, CodeSprint continues to shape the future of tech entrepreneurship, bridging the gap between ideas and execution while fostering a thriving ecosystem of innovation, leadership, and collaboration.</p>
            </div>
          </div>
        </motion.section>

        {/* Phases */}
        <motion.section 
            className="py-20 container mx-auto px-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="inline-block px-4 py-1.5 bg-pink-900/70 text-pink-300 rounded-full text-sm uppercase font-semibold tracking-wider mb-4">
                Phases
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow font-orbit">THREE PHASES OF SUCCESS</h2>
            <p className="text-gray-400 mb-24 max-w-2xl mx-auto">The structured path from idea to reality, ensuring every team gets the guidance and resources they need to excel.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { 
                        icon: <Lightbulb size={40} />, 
                        title: 'IDEATE', 
                        description: 'Every great startup begins with a bold and visionary idea. In this phase, teams brainstorm, research, and refine their concepts to address real-world challenges. With expert mentorship, they craft innovative, scalable, and impactful solutions.',
                        number: '01'
                    },
                    { 
                        icon: <Gem size={40} />, 
                        title: 'PROTOTYPE', 
                        description: 'Turning ideas into reality—this phase focuses on building a functional prototype or MVP. Participants develop their solutions, test feasibility, and receive industry feedback to enhance their product before pitching to investors.',
                        number: '02'
                    },
                    { 
                        icon: <Rocket size={40} />, 
                        title: 'STARTUP', 
                        description: 'The final phase is where vision meets execution. Teams refine their business models, craft compelling pitches, and present their startups to a panel of industry leaders. This is where startups are born, and futures are shaped.',
                        number: '03'
                    },
                ].map((phase, index) => (
                    <div key={index} className="relative flex flex-col items-center pt-8">
                        <div className="absolute -top-8 w-24 h-24 flex items-center justify-center bg-gray-900 rounded-full border border-gray-700 box-glow">
                           <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full">
                            {phase.icon}
                           </div>
                        </div>
                        <div className="relative w-full h-full p-8 pt-20 border border-pink-900 rounded-lg bg-gray-900 bg-opacity-50 box-glow overflow-hidden hover:shadow-pink-500/50 hover:shadow-lg transition-shadow duration-300">
                           <h3 className="text-2xl font-bold mb-4 font-orbit">{phase.title}</h3>
                           <p className="text-gray-400 text-sm leading-6">{phase.description}</p>
                           <div className="absolute -bottom-8 -right-2 text-8xl font-bold font-orbit text-gray-800 text-opacity-50">
                               {phase.number}
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>

        {/* stats */}
        <motion.div 
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-around items-center gap-12">
              {[
                  { icon: <Users />, value: '2400+', label: 'Participants' },
                  { icon: <Folder />, value: '550+', label: 'Teams Registered' },
                  { icon: <Calendar />, value: '26', label: 'Universities' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl text-pink-400 mb-3">{stat.icon}</div>
                  <p className="text-4xl font-bold text-glow font-orbit">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Memories / Carousel */}
        <motion.section 
            className="py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="inline-block px-4 py-1.5 bg-pink-900/70 text-pink-300 rounded-full text-sm uppercase font-semibold tracking-wider mb-4">
              Gallery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-glow font-orbit">OUR MEMORIES</h2>
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '/gallery-1.jpg',
                '/gallery-2.jpg',
                '/gallery-3.jpg',
                '/gallery-4.jpg',
              ].map((src, index) => (
                <div key={index} className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
        </motion.section>

        {/* Roadmap / Timeline */}
        <motion.section 
            className="py-20 container mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="text-center mb-16">
                 <div className="inline-block px-4 py-1.5 bg-pink-900/70 text-pink-300 rounded-full text-sm uppercase font-semibold tracking-wider mb-4">
                    Roadmap
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-glow font-orbit">THE JOURNEY OF CODESPRINT X</h2>
            </div>
            <div className="relative max-w-4xl mx-auto timeline-line">
              {[
                { title: 'REGISTRATIONS OPEN', description: 'Mark your calendars! The journey begins now. Form your teams and sign up.' },
                { title: 'IDEATE REGISTRATIONS OPEN', description: 'The Ideathon stage is your chance to shine. Brainstorm ideas, form teams of 2-4 members, and submit your proposal through our platform. All the best!' },
                { title: 'PROTOTYPE REGISTRATIONS OPEN', description: 'It’s time to bring your ideas to life. Develop a functional prototype and submit it for evaluation. This is where your technical skills will be put to the test.' },
                { title: 'TECHNICAL PITCH', description: 'The pitch presentation is the final step. Present your work to our judges, covering the problem, solution, and business model. Make it count!' },
                { title: 'GRAND FINALE', description: 'The moment of truth! The top teams will be announced, and prizes will be awarded. Celebrate your hard work and success with us.' },
              ].map((event, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                   <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-4 h-4 rounded-full"></div>
                  <div className={`order-1 w-5/12 p-4 rounded-lg shadow-xl bg-gray-900 bg-opacity-50 box-glow ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-bold text-lg mb-1 font-orbit">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
                <button className="mt-8 px-8 py-3 bg-transparent border border-pink-500 text-pink-500 font-bold rounded-full hover:bg-pink-500 hover:text-white transition-transform duration-300 button-glow">
                  CONTACT US
                </button>
              </div>
        </motion.section>

        {/* Contact / Team */}
        <motion.section 
            className="py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="inline-block px-4 py-1.5 bg-pink-900/70 text-pink-300 rounded-full text-sm uppercase font-semibold tracking-wider mb-4">
                Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-glow font-orbit">MEET THE EXPERTS</h2>
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'VIHAN PERERA', role: 'Lead Organizer', image: '/team-1.jpg' },
                { name: 'KAVISHA THANUJAN', role: 'Co-Lead Organizer', image: '/team-2.jpg' },
                { name: 'GIMHANI RANATHUNGA', role: 'Co-Lead Organizer', image: '/team-3.jpg' },
                { name: 'PRASANNA KATHIRAMANATHAN', role: 'Co-Lead Organizer', image: '/team-4.jpg' },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg border-2 border-pink-400"
                    />
                  </div>
                  <h3 className="font-bold text-lg font-orbit">{member.name}</h3>
                  <p className="text-pink-400 text-sm">{member.role}</p>
                  <div className="flex gap-4 mt-2">
                    <FaLinkedin className="text-gray-400 hover:text-white" />
                    <FaTwitter className="text-gray-400 hover:text-white" />
                  </div>
                </div>
              ))}
            </div>
        </motion.section>

        {/* FAQ and Registration form */}
        <motion.section 
            id="register" 
            className="py-20 container mx-auto px-4 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="text-center mb-12">
                 <div className="inline-block px-4 py-1.5 bg-pink-900/70 text-pink-300 rounded-full text-sm uppercase font-semibold tracking-wider mb-4">
                    Get Started
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-glow font-orbit">FREQUENTly ASKED QUESTIONS</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {faqData.map((item, index) => (
                <FAQItem key={index} item={item} index={index} />
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
                <p className="text-sm text-gray-500">&copy; 2025 CodeSprint X. All Rights Reserved.</p>
                <div className="flex gap-6">
                  <FaFacebook className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaTwitter className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaInstagram className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaLinkedin className="text-xl text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
        </motion.footer>

      </main>
    </>
  );
}
