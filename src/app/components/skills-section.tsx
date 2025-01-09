"use client";
import { motion, useInView } from 'framer-motion'
import { WrenchIcon } from 'lucide-react'
import { useRef } from 'react';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const skills = [
    "Python","Javascript","TypeScript","PHP","Java","SQL", 
    "Next.js","React.js","Tailwind CSS", "Node.js",
    "Bootstrap", "Excel", "Tableau", "Power BI",
    "MongoDB","PostgreSQL", "SQLite", "MySQL", "Access",
    "Responsive Design", "SEO Optimization", "Performance Tuning", "Git",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 text-gray-400"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-semibold text-gray-200 mb-8 flex items-center gap-2"
      >
        <WrenchIcon className="w-6 h-6" />
        Skills
      </motion.h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

