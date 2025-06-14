'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full px-6 h-[60px] flex items-center justify-between
                 bg-white/80 backdrop-blur-md z-50"
    >
      {/* Left side: Profile picture */}
      <img
        src="/profile.jpg"
        alt="Portrait of Fernando"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Right side: Navigation links and button */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#projects" className="text-gray-800 font-medium hover:underline">
          Projects
        </a>

        <a
          href="https://github.com/fernandojosecc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-medium hover:underline"
        >
          GitHub
        </a>

        <button
          className="bg-white text-black px-4 py-2 rounded-full shadow-md
                     hover:shadow-lg transition-shadow"
        >
          Start a Project
        </button>
      </nav>
    </motion.header>
  );
}
