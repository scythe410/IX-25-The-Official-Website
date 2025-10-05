'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', idea: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-mont">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            {/* starfield background */}
            <div
              className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_40%),url('/stars.png')] bg-cover opacity-60"
              style={{ backgroundImage: "url('/stars.png')" }}
            />
          </div>

          <div className="container mx-auto px-6 py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight font-orbit mb-4">CODESPRINT X</h1>
                <p className="text-gray-300 max-w-lg">Defying the final line — a battle for startup brilliance, prototypes and the future of ideas.</p>
                <div className="mt-8 flex gap-4">
                  <a href="#register" className="inline-block px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg">Register</a>
                  <a href="#about" className="inline-block px-6 py-3 ring-1 ring-white/10 rounded-xl">Learn more</a>
                </div>
              </motion.div>

              <motion.div className="flex justify-center lg:justify-end" initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
                <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] relative rounded-full overflow-hidden shadow-2xl">
                  {/* main astronaut hero image — replace with high-res transparent PNG in public/ */}
                  <img src="/astronaut-hero.png" alt="astronaut" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 mix-blend-screen" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About / Battle section */}
        <section id="about" className="container mx-auto px-6 py-14 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-72 h-72 bg-gradient-to-tr from-gray-800/80 to-gray-700/40 rounded-2xl p-6">
                <img src="/helmet.png" alt="helmet" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold font-orbit">THE BATTLE FOR STARTUP BRILLIANCE</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">CodeSprint X gathers founders, designers and engineers to prototype daring ideas. Over a sequence of ideation, prototype and startup phases, teams compete, learn and launch. Winners receive mentorship, funding pathways and showcase opportunities.</p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-gray-800/60 rounded-full text-sm">Prototype submissions closed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="bg-gradient-to-b from-transparent to-gray-900 py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-center text-3xl font-bold font-orbit mb-8">THREE PHASES OF SUCCESS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'IDEATE', desc: 'Explore and validate ideas, form teams and refine concepts.' },
                { title: 'PROTOTYPE', desc: 'Rapidly build and test working prototypes to demonstrate product-market fit.' },
                { title: 'STARTUP', desc: 'Launch, pitch and secure support to scale your product into a business.' }
              ].map((p, i) => (
                <motion.div key={p.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/60 p-6 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold font-orbit mb-3">{p.title}</div>
                  <p className="text-gray-300 text-sm">{p.desc}</p>
                  <div className="mt-4 text-5xl text-gray-600 opacity-30 font-orbit">0{(i + 1).toString()}</div>
                </motion.div>
              ))}
            </div>

            {/* stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-gray-900/60"> <div className="text-3xl font-bold">2400+</div><div className="text-sm text-gray-400">Participants</div></div>
              <div className="p-6 rounded-xl bg-gray-900/60"> <div className="text-3xl font-bold">550+</div><div className="text-sm text-gray-400">Teams</div></div>
              <div className="p-6 rounded-xl bg-gray-900/60"> <div className="text-3xl font-bold">26</div><div className="text-sm text-gray-400">Universities</div></div>
            </div>
          </div>
        </section>

        {/* Memories / Carousel */}
        <section className="container mx-auto px-6 py-16">
          <h3 className="text-center text-3xl font-orbit font-bold mb-8">OUR MEMORIES</h3>
          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 1.2 }, 1024: { slidesPerView: 3 } }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500 }}
            >
              {[1, 2, 3, 4].map(i => (
                <SwiperSlide key={i}>
                  <div className="bg-gray-900/50 rounded-2xl p-4 flex flex-col items-center gap-4">
                    <div className="w-full h-44 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('/mem${i}.jpg')`}} />
                    <div className="text-sm text-gray-300">CODESPRINT {i}.0</div>
                    <div className="text-white font-semibold">Memories from edition {i}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Roadmap / Timeline */}
        <section className="bg-gradient-to-t from-black/0 to-gray-900 py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl text-center font-orbit font-bold mb-8">THE JOURNEY OF CODESPRINT X</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/10 h-full" />
                <div className="space-y-8">
                  {[
                    { title: 'Registrations Open', body: 'Teams register and prepare initial decks.' },
                    { title: 'Prototype Registrations Open', body: 'Selected teams submit prototypes and demos.' },
                    { title: 'Grand Finals', body: 'Finalists pitch to judges and audience.' },
                    { title: 'Technical Pitch', body: 'Deep technical presentations and Q&A.' }
                  ].map((item, idx) => (
                    <div key={item.title} className={`flex items-center w-full ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className="w-5/12">
                        <div className={`bg-gray-900/60 p-6 rounded-2xl shadow-lg ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-gray-300 text-sm mt-2">{item.body}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Team */}
        <section className="container mx-auto px-6 py-16">
          <h3 className="text-3xl text-center font-orbit font-bold mb-8">CONTACT US</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Vihan Menis', role: 'Head Organizer', img: '/team1.jpg' },
              { name: 'Mayuran Thanubalan', role: 'Tech Lead', img: '/team2.jpg' },
              { name: 'Gihansa Bharathchandra', role: 'Design Lead', img: '/team3.jpg' },
              { name: 'Hakamah Kethiraparuthan', role: 'Operations', img: '/team4.jpg' }
            ].map((m, i) => (
              <div key={m.name} className="bg-gray-900/50 p-4 rounded-2xl text-center">
                <img src={m.img} alt={m.name} className="w-28 h-28 object-cover rounded-full mx-auto" />
                <div className="mt-3 font-semibold">{m.name}</div>
                <div className="text-sm text-gray-400">{m.role}</div>
                <div className="mt-3 flex justify-center gap-3 text-gray-400">
                  <a href="#" aria-label="twitter">TW</a>
                  <a href="#" aria-label="linkedin">IN</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ and Registration form */}
        <section id="register" className="bg-gradient-to-b from-gray-900 to-black py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-orbit font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h3>
              <div className="space-y-4 text-gray-300">
                {["How many members per team?", "Who can join CodeSprint X?", "Is coding required?", "Will I get a certificate?"].map((q, i) => (
                  <details key={i} className="bg-gray-900/50 p-4 rounded-lg">
                    <summary className="cursor-pointer font-semibold">{q}</summary>
                    <p className="mt-2 text-sm text-gray-400">Answer goes here — mimic the style from the screenshot with concise copy and subtle opacity.</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/60 p-6 rounded-2xl">
              <h4 className="font-semibold mb-4">Register your team</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Team / Lead name" className="w-full p-3 bg-gray-800/50 rounded-md" />
                <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full p-3 bg-gray-800/50 rounded-md" />
                <textarea name="idea" value={form.idea} onChange={handleChange} placeholder="Short idea summary" rows={4} className="w-full p-3 bg-gray-800/50 rounded-md" />
                <button type="submit" className="w-full py-3 rounded-lg bg-white text-black font-semibold">{submitting ? 'Submitting...' : 'Submit'}</button>
                {submitted && <div className="text-sm text-green-400">Registration simulated — we received your submission!</div>}
              </form>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-gray-400">
          <div className="container mx-auto px-6">© {new Date().getFullYear()} CodeSprint X — Replicated Design</div>
        </footer>
      </main>
    </>
  );
}
