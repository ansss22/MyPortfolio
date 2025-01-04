export default function SkillsSection() {
    const skills = [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Design", items: ["Figma", "Adobe XD", "Sketch"] },
      { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
      { category: "Tools", items: ["Git", "Docker", "Jest", "Cypress"] },
    ];
  
    return (
      <div className="py-16 text-gray-400">
        <h2 className="text-2xl font-semibold text-gray-200 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-medium text-gray-300 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  