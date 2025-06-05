'use client'; // Needed if using Lenis or any browser-side effects

import { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
