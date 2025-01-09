"use client";
import { motion, useInView } from 'framer-motion'
import { GraduationCapIcon } from 'lucide-react'
import { useRef } from 'react';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const education = [
    {
      degree: "University Diploma of Technology (DUT) ",
      institution: "École Supérieure de Technologie ,Oujda",
      year: "2023 - 2025",
      description: "Specialized in Business Intelligence and Machine Learning ."
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 text-gray-400 px-4 sm:px-0"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-semibold text-gray-200 mb-8 flex items-center gap-2"
      >
        <GraduationCapIcon className="w-6 h-6" />
        Education
      </motion.h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="space-y-2"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-300">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
              <span className="text-blue-500 text-sm mt-1 sm:mt-0">{edu.year}</span>
            </div>
            <p className="text-gray-400/80 leading-relaxed">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

