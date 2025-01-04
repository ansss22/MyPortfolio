import { CalendarIcon } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <div className="py-16 text-gray-400">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-500">
            <CalendarIcon className="w-4 h-4" />
            <span>Dec 2024 - Present</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200 text-xl">
            <span>Design Engineer</span>
            <span className="text-gray-500">·</span>
            <span>Perspective</span>
          </div>
        </div>

        <p className="text-gray-400/80 leading-relaxed">
          Contributing as a Design Engineer in a remote-first environment, focusing on bridging the gap between
          design and engineering through systematic approaches to product development. Taking
          ownership of design systems architecture and implementing scalable component libraries that
          ensure consistency and accessibility. Working cross-functionally with both design and engineering teams to
          deliver cohesive user experiences. Key responsibilities include developing reusable design patterns, creating
          technical specifications for design implementations, and establishing frameworks for design-to-code
          workflows. Utilizing modern frontend technologies and design tools to create scalable, maintainable solutions
          that align with both technical and aesthetic requirements.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            'Next.js',
            'Tailwind CSS',
            'TypeScript',
            'Storybook',
            'Figma',
            'React Query',
            'Zustand'
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

