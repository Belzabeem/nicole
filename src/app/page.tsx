import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Impact from '@/components/Impact';
import MediaProvider from '@/components/MediaProvider';
import ProofStrip from '@/components/ProofStrip';
import Services from '@/components/Services';
import Stage from '@/components/Stage';
import Voices from '@/components/Voices';
import Work from '@/components/Work';

export default function Home() {
  return (
    <MediaProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Stage />
        <About />
        <Work />
        <Services />
        <Impact />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </MediaProvider>
  );
}
