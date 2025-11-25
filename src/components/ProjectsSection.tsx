import Projects from "@/data/projects.json";
import Image from "next/image";

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
            <article
              key={project.name}
              className="group bg-neutral-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={`/${project.name.split(" ")[1].toLowerCase()}.png`}
                  alt={project.name}
                /> */}
                <Image
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={`/${project.name.split(" ")[1].toLowerCase()}.png`}
                  alt={project.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-neutral-300 mb-2">{project.description}</p>
                {project.role && (
                  <p className="text-sm text-neutral-400 mb-4">{project.role}</p>
                )}
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
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-neutral-900 bg-yellow-400 hover:bg-yellow-300 px-3 py-1.5 rounded-md transition-colors"
                      aria-label={`Open live demo of ${project.name}`}
                    >
                      Live demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-200 border border-neutral-600 hover:border-neutral-400 px-3 py-1.5 rounded-md transition-colors"
                    aria-label={`View source code for ${project.name} on GitHub`}
                  >
                    View code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
