'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import Card from './Card';

const CARD_H = 500; // height of a card in pixels
const GAP = 100;    // gap between cards
const TOTAL = CARD_H + GAP; // total vertical space per card

export default function Projects() {
  const projects = [
    {
      title: 'Budget Planner Finance App',
      description: 'With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.',
      image: '/images/finance-app.png',
      bgColor: 'bg-green-100',
      stats: [
        { label: 'Engagement', value: '12 min' },
        { label: 'User Satisfaction', value: '4.5★' },
      ],
    },
    {
      title: 'Recipe Book App',
      description: 'A simple and visually appealing Flutter app that showcases a collection of international recipes.',
      image: '/images/recipe-app.png',
      bgColor: 'bg-orange-100',
      buttons: [
        {
          label: 'View Repository',
          onClick: () => window.open('https://github.com/fernandojosecc', '_blank'),
        },
      ],
    },
    {
      title: 'Time-Tracking Dashboard',
      description: 'A responsive Flutter dashboard to track activities.',
      image: '/images/time-tracker.png',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Internet-Sharing UI',
      description: 'An intuitive UI for managing internet sharing across devices.',
      image: '/images/ui-design.png',
      bgColor: 'bg-blue-100',
      stats: [
        { label: 'Conversion Rate', value: '20 %' },
        { label: 'User Satisfaction', value: '95 %' },
      ],
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={container}
      id="projects"
      className="relative bg-transparent"
      style={{ height: TOTAL * projects.length,
        perspective: '1500px',                  // 👈 Adds 3D depth
    perspectiveOrigin: 'center top'
       }}
    >
      {projects.map((proj, i) => {
       const baseY = i * TOTAL;
  const start = baseY;
  const end = baseY + TOTAL;

  const baseOffset = i * 40;
  const y = useTransform(scrollYProgress, [start, end], [baseOffset, baseOffset + 150]);

  
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.74]); 
  const rotateX = useTransform(scrollYProgress, [start, end], [0, 6]);
  const z = useTransform(scrollYProgress, [start, end], [0, -50]);
  const opacity = useTransform(scrollYProgress, [start, end - GAP / 2], [1, 0.4]);

  return (
    <motion.div
  key={i}
  style={{
    y,
    scale,
    opacity,
    rotateX,
    transformStyle: 'preserve-3d',
    transformOrigin: 'center center',
    zIndex: projects.length + i,
  }}
  className="sticky top-24 pb-10 flex justify-center"
  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
>
  <div className="w-[1100px] h-[500px]">
    <Card {...proj} />
  </div>
</motion.div>


        );
      })}
    </section>
  );
}
