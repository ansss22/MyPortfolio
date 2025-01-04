import { ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Excalidraw Clone",
      description: "A simple clone of Excalidraw built with React and TypeScript. I made this side project for learning purposes. The app isn't responsive, but I prioritized functionalities over responsiveness.",
      technologies: ["React", "TypeScript", "CSS", "Cypress"],
      link: "#"
    },
    {
      title: "DragTrack",
      description: "It's a simple Kanban board that allows you to drag and drop tasks between columns.",
      technologies: ["React", "TypeScript", "Framer-Motion", "Tailwind CSS"],
      link: "#"
    }
  ]

  return (
    <div className="py-16 text-gray-400">
      <div className="max-w-3xl w-full space-y-4 mx-auto">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-medium text-gray-200">
                  {project.title}
                </h2>
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
          </a>
        ))}
      </div>
    </div>
  )
}

