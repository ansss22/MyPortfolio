"use client";

import HeroSection from './components/hero-section'
import ExperienceSection from './components/experience-section'
import SkillsSection from './components/skills-section'
import ProjectsSection from './components/projects-section'
import Footer from './components/footer'
import EducationSection from './components/eduction-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6">
        <main className="flex flex-col divide-y divide-gray-800">
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

