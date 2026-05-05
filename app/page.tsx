'use client';

import HeroSection from './components/HeroSection';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="bg-gray-900">
      <HeroSection />
      <ArchitectureDiagram />
      <section id="contact" className="py-20 bg-gray-900">
        <ContactForm />
      </section>
    </main>
  );
}
