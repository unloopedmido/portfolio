import Projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <section className="bg-neutral-900 py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white inline-block relative">
            <span className="bg-gradient-to-r from-red-500 to-transparent px-2">
              Projects
            </span>
          </h2>
          <p className="text-xl text-neutral-300 mt-3 max-w-2xl">
            A showcase of my recent work spanning web development, UI/UX design,
            and interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.name}
              className="bg-neutral-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-0.5 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={`/${project.name.split(" ")[1].toLowerCase()}.png`}
                  alt={project.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-neutral-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies &&
                    project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-neutral-700 text-xs text-neutral-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-neutral-300 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
