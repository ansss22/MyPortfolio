"use client";
import { motion, useInView } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
import { useRef } from 'react';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
        <BriefcaseIcon className="w-6 h-6" />
        Experience
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-500">
            <CalendarIcon className="w-4 h-4" />
            <span>Aug 2024 - Sep 2024 · 2 months</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200 text-xl">
            <span>Data Engineer</span>
            <span className="text-gray-500">·</span>
            <span>Internship</span>
          </div>
        </div>

        <p className="text-gray-400/80 leading-relaxed">
          During my internship at the Targuist Commune, I designed an
          application to track vehicle repair expenses and spare parts. I was
          also responsible for managing the inventory and related data in Excel,
          ensuring accurate and up-to-date records. Additionally, I created an
          interactive dashboard using Power BI to analyze expenses and visualize
          the data, providing valuable insights for decision-making.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "Excel",
            "Power BI",
            "Tkinter",
          ].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-lg"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

