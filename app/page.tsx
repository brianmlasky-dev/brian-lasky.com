'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureDiagram />
      <section id="contact" className="py-20 bg-gray-900">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
