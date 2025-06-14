'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import AnimatedBackground from '@/app/components/AnimatedBackground';

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
    <main className="">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
