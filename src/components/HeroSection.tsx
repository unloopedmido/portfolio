"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      aria-label="About"
    >
      {/* Subtle mouse-following gradient spotlight */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-50 dark:opacity-20 transition-opacity duration-500"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--muted), transparent 40%)`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] font-black tracking-tighter uppercase text-foreground flex flex-col items-center">
            <span className="block hover:-translate-y-2 transition-transform duration-300 cursor-default">
              Artist
            </span>
            <span
              className="block text-transparent italic font-serif lowercase text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] hover:text-foreground transition-colors duration-500 cursor-default py-2"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "var(--foreground)",
              }}
            >
              with creativity
            </span>
            <span className="block hover:-translate-y-2 transition-transform duration-300 cursor-default">
              For Days.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 md:mt-14 text-lg md:text-xl text-muted-foreground max-w-2xl font-mono uppercase tracking-widest px-4"
        >
          Full-Stack Developer & Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors duration-300 overflow-hidden"
          >
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase group-hover:scale-110 transition-transform duration-300">
              Explore
            </span>
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-t-2 border-foreground opacity-30 animate-[spin_4s_linear_infinite]"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
