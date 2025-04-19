import Image from "next/image";

export default function HomeSection() {
	return (
		<>
			<section id="about" className="pt-20 bg-neutral-800 text-white min-h-screen p-6 flex items-center justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 max-w-6xl place-items-center">
					<section className="flex flex-col gap-y-6">
						<h1 className="font-bold text-5xl md:text-6xl">
							Yet another{" "}
							<span className="bg-gradient-to-r from-red-500 to-transparent px-2 rounded">
								artist
							</span>{" "}
							with{" "}
							<span className="bg-gradient-to-r from-yellow-500 to-transparent px-2 rounded">
								creativity
							</span>{" "}
							for days.
						</h1>
						<p className="text-xl text-neutral-300 leading-relaxed">
							Full-stack developer specializing in creative interfaces and
							seamless experiences.
						</p>
						<div className="flex gap-4 mt-4">
							<a
								href="#projects"
								className="bg-red-500 hover:bg-red-600 transition-colors duration-200 py-2 px-6 rounded-md font-medium"
							>
								See my work
							</a>
							<a
								href="#contact"
								className="border border-white py-2 px-6 rounded-md font-medium hover:bg-white hover:text-neutral-800 transition-colors duration-200"
							>
								Get in touch
							</a>
						</div>
					</section>
					<div className="mt-8 md:mt-0 w-full max-w-lg mx-auto shadow-lg">
						<div className="flex items-center justify-between px-4 py-2 bg-neutral-700 rounded-t-md">
							<div className="flex items-center gap-x-2">
								<Image
									width={24}
									height={24}
									src="https://winaero.com/blog/wp-content/uploads/2019/06/WIndows-Terminal-icon.png"
									alt="Terminal icon"
								/>
								<h2 className="text-sm font-medium capitalize">
									Administrator: Command Prompt
								</h2>
							</div>
							<div className="flex gap-x-4 items-center">
								<button className="inline-block text-xl hover:text-gray-300">
									−
								</button>
								<button className="inline-block text-xl hover:text-gray-300">
									□
								</button>
								<button className="inline-block text-xl hover:text-gray-300">
									×
								</button>
							</div>
						</div>
						<div className="w-full bg-neutral-900 p-4 rounded-b-md font-mono text-sm">
							<div className="terminal-text space-y-1">
								<p>C:\Users\Developer&gt; whoami</p>
								<p className="text-green-400">Looped - Full-stack Developer</p>
								<p>C:\Users\Developer&gt; skills --list</p>
								<p className="text-yellow-300">
									JavaScript, Node.js, UI/UX, Astro, Tailwind, ...
								</p>
								<p>C:\Users\Developer&gt; experience</p>
								<p className="text-blue-300">
									5+ years building exceptional web-based games and sites
								</p>
								<div className="flex items-center gap-x-2">
									<span>C:\Users\Developer&gt;</span>
									<div className="h-4 bg-white w-0.5 animate-caret-blink"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
