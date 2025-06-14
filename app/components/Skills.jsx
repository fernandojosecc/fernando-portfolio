'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    'JavaScript', 'React', 'Flutter', 'Tailwind CSS', 'Firebase', 'Figma',
    'PostgreSQL', 'Python', 'Git', 'UI Design', 'UX Research',
    'Responsive Design', 'No-Code Tools', 'Leadership', 'Team Collaboration',
  ];

  return (
    <motion.section
      className="pb-20 pt-40 px-4 bg-white flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="w-full max-w-5xl text-[38px] font-satoshi font-medium text-left mb-12">Skills</h2>

      <motion.div
        className="max-w-5xl flex flex-wrap justify-start gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="text-[18px] font-satoshi bg-[#3F6C88] text-white px-4 py-2  rounded-[8px] text-sm font-medium shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
