'use client';

import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';

export default function HomePage() {
  return (
    <main className="pt-[80px]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
