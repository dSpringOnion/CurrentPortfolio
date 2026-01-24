"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { ProjectsTimeline } from '@/components/ProjectsTimeline';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="App bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <ProjectsTimeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
