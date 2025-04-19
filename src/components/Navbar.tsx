"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		interface IntersectionHandler {
			(entries: IntersectionObserverEntry[]): void;
		}

		const handleIntersection: IntersectionHandler = (
			entries: IntersectionObserverEntry[]
		): void => {
			const visibleEntry = entries.find((entry) => entry.isIntersecting);

			if (visibleEntry) {
				setActiveSection(visibleEntry.target.id);
			}
		};

		window.addEventListener("scroll", handleScroll);

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.2,
			rootMargin: "-80px 0px -20% 0px",
		});

		const sections = document.querySelectorAll("section[id]");
		sections.forEach((section) => observer.observe(section));

		return () => {
			window.removeEventListener("scroll", handleScroll);
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
				scrolled
					? "bg-neutral-900/95 backdrop-blur-md border-neutral-700"
					: "bg-neutral-900/70 backdrop-blur-sm border-transparent"
			}`}
		>
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<a
					href="#"
					className="group flex items-center gap-2"
					onClick={() => setActiveSection("home")}
				>
					<div className="w-7 h-7 bg-red-500 rounded-md flex items-center justify-center group-hover:bg-red-600 transition-colors duration-200">
						<span className="text-white font-mono font-bold">L</span>
					</div>
					<span className="text-white text-xl font-bold tracking-wide relative">
						ooped
						<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
					</span>
				</a>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-8 text-white font-medium">
					{["about", "projects", "contact"].map((item) => (
						<li key={item}>
							<a
								href={`#${item}`}
								className={`relative py-1 px-2 transition-colors duration-200 ${
									activeSection === item
										? "text-white"
										: "text-neutral-400 hover:text-white"
								}`}
							>
								{activeSection === item && (
									<motion.span
										layoutId="activeNav"
										className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-md -z-10"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									/>
								)}
								<span className="relative z-10 font-mono">{`<${item} />`}</span>
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Hamburger */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden text-white focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center"
					aria-label="Toggle menu"
				>
					<div
						className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
							menuOpen ? "rotate-45" : "-translate-y-2"
						}`}
					/>
					<div
						className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
							menuOpen ? "opacity-0" : "opacity-100"
						}`}
					/>
					<div
						className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
							menuOpen ? "-rotate-45" : "translate-y-2"
						}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden overflow-hidden bg-neutral-800 border-t border-neutral-700"
					>
						<div className="px-6 py-4">
							<ul className="flex flex-col gap-4 text-white">
								{["about", "projects", "contact"].map((item) => (
									<motion.li
										key={item}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{
											delay:
												0.1 * ["about", "projects", "contact"].indexOf(item),
										}}
									>
										<a
											href={`#${item}`}
											onClick={() => setMenuOpen(false)}
											className={`block py-2 px-3 rounded-md font-mono ${
												activeSection === item
													? "bg-gradient-to-r from-red-500/20 to-yellow-500/20 text-white"
													: "text-neutral-300 hover:text-white"
											}`}
										>
											{`<${item} />`}
										</a>
									</motion.li>
								))}
							</ul>
							<div className="mt-6 pt-4 border-t border-neutral-700 font-mono text-xs text-neutral-500">
								{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
								<p>/* Connect with me */</p>
								<div className="flex gap-4 mt-2">
									<Link
										target="_blank"
										href="https://github.com/unloopedmido"
										className="text-neutral-400 hover:text-white transition-colors"
									>
										GitHub
									</Link>
									<Link
										href="https://x.com/nonlooped"
										target="_blank"
										rel="noopener noreferrer"
										className="text-neutral-400 hover:text-white transition-colors"
									>
										Twitter
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
