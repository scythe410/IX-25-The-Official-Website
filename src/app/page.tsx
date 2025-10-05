import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Phases from '@/components/Phases';
import Stats from '@/components/Stats';
import Memories from '@/components/Memories';
import Journey from '@/components/Journey';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Sponsors />
      <Phases />
      <Stats />
      <Memories />
      <Journey />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
