import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import {
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Looped | Full-Stack Developer & Creative Artist",
  description:
    "Looped is a full-stack developer and digital artist passionate about building seamless user experiences, interactive web apps, and creative interfaces. View portfolio and projects.",
};

export default function Home() {
  const contactInfo = [
    {
      platform: "Twitter",
      handle: "@nonlooped",
      url: "https://twitter.com/nonlooped",
      icon: FaTwitter,
    },
    {
      platform: "Email",
      handle: "cored.developments@gmail.com",
      url: "mailto:cored.developments@gmail.com",
      icon: FaEnvelope,
    },
    {
      platform: "Discord",
      handle: "@nonlooped",
      icon: FaDiscord,
    },
  ];

  return (
    <main className="relative">
      <HeroSection />
      <ProjectsSection />
      <section
        className="min-h-[80vh] py-24 md:py-32 px-6 flex flex-col justify-center items-center"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
            <h2 id="contact-heading" className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter uppercase mb-6">
              Let&apos;s{" "}
              <span
                className="text-transparent italic font-serif"
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "var(--foreground)",
                }}
              >
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-foreground/20 rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono text-center">
              Ready to collaborate? Reach out through any of these platforms.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
            {contactInfo.map((contact, index) => {
              const Content = (
                <div className="flex flex-col items-center text-center justify-center w-full h-full bg-card-bg/50 backdrop-blur-sm border border-card-border p-10 rounded-[2.5rem] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-card-bg group">
                  <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <contact.icon className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {contact.platform}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mb-6 break-all">
                    {contact.handle}
                  </p>
                  {contact.url && (
                    <div className="flex items-center justify-center text-sm font-semibold uppercase tracking-widest text-foreground group-hover:opacity-70 transition-opacity">
                      <span className="mr-2">Connect</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </div>
                  )}
                </div>
              );

              return contact.url ? (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-[30%] min-w-[280px]"
                >
                  {Content}
                </a>
              ) : (
                <div
                  key={index}
                  className="block w-full md:w-[30%] min-w-[280px] cursor-default"
                >
                  {Content}
                </div>
              );
            })}
          </div>

          {/* Additional CTA section strictly centered */}
          <div className="mt-20 md:mt-32 w-full flex justify-center">
            <div className="bg-card-bg/50 backdrop-blur-sm border border-card-border p-10 md:p-16 rounded-[3rem] shadow-sm flex flex-col items-center text-center max-w-3xl w-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight relative z-10">
                Let&apos;s Build Something{" "}
                <span className="italic font-serif font-light text-muted-foreground block mt-2">
                  Extraordinary.
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl relative z-10">
                Whether you have a project in mind or just want to chat about
                tech, I&apos;m always excited to connect with fellow creators
                and innovators.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <a
                  href="mailto:cored.developments@gmail.com"
                  className="bg-foreground text-background hover:bg-foreground/80 uppercase tracking-widest font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
