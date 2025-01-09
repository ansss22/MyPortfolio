"use client";
import { motion, useInView } from 'framer-motion'
import { BadgeCheckIcon } from 'lucide-react';
import Image from "next/image";
import { useRef } from 'react';

export default function HeroSection() {
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
      <div className="max-w-3xl space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="relative">
            <Image
              src="/assets/images/avatar.jpeg"
              alt="Profile avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-gray-200">
                Anass El Amrany
              </h1>
              <BadgeCheckIcon className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 leading-relaxed max-w-2xl"
        >
          I&apos;m a Full Stack Developer based in Morocco. I have a passion for
          developing web applications and solving complex problems. I&apos;m a
          self-taught developer who enjoys building projects that make
          people&apos;s lives easier. I&apos;m always looking for new
          opportunities to learn.
        </motion.p>
      </div>
    </motion.div>
  );
}

