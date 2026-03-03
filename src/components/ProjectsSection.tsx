import Projects from "@/data/projects.json";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 px-6" id="projects" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <h2 id="projects-heading" className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase mb-6">
            Selected Work
          </h2>
          <div className="w-24 h-1 bg-foreground/20 rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl">
            A showcase of my recent work spanning web development, UI/UX design,
            and interactive experiences.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {Projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const imageName =
              project.name.split(" ")[1]?.toLowerCase() ||
              project.name.toLowerCase().replace(/\s+/g, "");

            return (
              <div
                key={project.name}
                className={`flex flex-col md:flex-row gap-10 lg:gap-20 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-3/5 group relative overflow-hidden bg-muted h-[40vh] md:h-[60vh] rounded-[2rem] md:rounded-[3rem] shadow-xl border border-card-border">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    src={`/${imageName}.png`}
                    alt={project.name}
                    fill
                    sizes="(min-width:1024px) 60vw, 100vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-center px-4 md:px-0">
                  <span className="text-6xl md:text-8xl font-black text-foreground/10 mb-4 block leading-none select-none">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies &&
                      project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground px-4 py-2 rounded-full border border-border-theme hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${project.name} on GitHub`}
                    className="group inline-flex items-center gap-3 text-foreground font-semibold uppercase tracking-widest text-sm w-max"
                  >
                    <span className="group-hover:opacity-70 transition-opacity">View Project</span>
                    <div className="w-10 h-10 rounded-full border border-border-theme flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:scale-110">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
