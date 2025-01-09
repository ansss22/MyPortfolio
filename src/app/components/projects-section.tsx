"use client";
import { motion, useInView } from 'framer-motion'
import { FolderIcon, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const projects = [
    {
      title: "Filmpire",
      description: "Developed Filmpire, a Netflix clone using React.js, Material UI, and APIs, providing a dynamic and responsive streaming experience. This project highlights skills in front-end development and the integration of modern APIs.",
      technologies: ["React", "Material UI", "API", "Javascript"],
      link: "https://github.com/ansss22/filmpire_app"
    },
    {
      title: "SocialConnect",
      description: "Created a web application using Django and Bootstrap, allowing users to create accounts, manage profiles, post messages, add friends, and view user activity. This project demonstrates skills in back-end development and front-end design",
      technologies: ["Python", "Django", "Bootstrap"],
      link: "https://github.com/ansss22/SocialConnect"
    }
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
        <FolderIcon className="w-6 h-6" />
        Projects
      </motion.h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            href={project.link}
            className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium text-gray-200">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

