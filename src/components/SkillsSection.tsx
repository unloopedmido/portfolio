export default function SkillsSection() {
  const primaryStack = [
    "TypeScript",
    "Next.js",
    "Node.js",
    "Prisma",
    "TailwindCSS",
  ];

  const sections = [
    {
      title: "Frontend & UI",
      items: ["React", "Next.js", "SvelteKit", "Nuxt", "TailwindCSS"],
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "NestJS", "Express", "FastAPI", "tRPC"],
    },
    {
      title: "Data & Persistence",
      items: [
        "Prisma",
        "Drizzle",
        "MongoDB",
        "SQL / SQLite",
        "Caching",
        "Auth flows",
      ],
    },
    {
      title: "Tooling & DX",
      items: ["Git", "Vite", "Chart.js", "discord.js"],
    },
  ];

  return (
    <section className="bg-neutral-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-white inline-block relative">
              <span className="bg-gradient-to-r from-yellow-500 to-transparent px-2">
                Skills &amp; Stack
              </span>
            </h2>
            <p className="text-xl text-neutral-300 mt-3 max-w-xl">
              The tools I rely on to ship games, tools, and web apps that feel
              fast, responsive, and fun to use.
            </p>
          </div>

          <div className="bg-neutral-900/70 border border-neutral-700 rounded-lg p-5 shadow-lg shadow-black/20">
            <p className="text-xs font-mono tracking-[0.2em] text-neutral-400 mb-3">
              PRIMARY STACK
            </p>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-neutral-700 bg-gradient-to-r from-red-500/20 to-yellow-500/10 px-3 py-1 text-sm text-neutral-100 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block text-sm text-neutral-400 font-mono">
            <p>C:\Skills&gt; summary</p>
            <p className="text-neutral-300">
              Full-stack, TypeScript-first workflows — from typed APIs and data
              models to polished frontends.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="relative overflow-hidden rounded-lg border border-neutral-700/80 bg-neutral-900/80 p-5 transition-colors duration-200 hover:border-red-500/60 hover:bg-neutral-900"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-red-500 to-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-neutral-300">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
