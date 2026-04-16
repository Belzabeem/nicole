'use client';

import Cursor from '@/components/Cursor';
import Noise from '@/components/Noise';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
      <Noise />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
