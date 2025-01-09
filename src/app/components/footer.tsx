"use client";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/anasss.el22/' },
    { name: 'Github', href: 'https://github.com/ansss22' },
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/anass-elamrany' }
  ]

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-16 text-gray-400 border-t border-gray-800"
    >
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex justify-center gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              href={link.href}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.footer>
  )
}

