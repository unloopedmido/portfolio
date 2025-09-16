import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import {
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
  const contactInfo = [
    {
      platform: "Twitter",
      handle: "@nonlooped",
      url: "https://twitter.com/nonlooped",
      icon: FaTwitter,
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:bg-blue-500",
    },
    {
      platform: "Email",
      handle: "cored.developments@gmail.com",
      url: "mailto:cored.developments@gmail.com",
      icon: FaEnvelope,
      color: "from-red-400 to-red-600",
      hoverColor: "hover:bg-red-500",
    },
  ];

  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <section className="min-h-screen bg-neutral-800 py-20 px-6" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white inline-block relative">
              <span className="bg-gradient-to-r from-yellow-500 to-transparent px-2">
                Contact Me
              </span>
            </h2>
            <p className="text-xl text-neutral-300 mt-3 max-w-2xl">
              Ready to collaborate? Reach out through any of these platforms and
              let&apos;s create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-neutral-900 p-8 rounded-lg shadow-lg border border-neutral-700 ${contact.hoverColor} hover:border-transparent transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${contact.color} group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <contact.icon className="text-2xl text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {contact.platform}
                    </h3>
                    <p className="text-neutral-300 group-hover:text-neutral-100 transition-colors duration-300 break-all">
                      {contact.handle}
                    </p>
                  </div>

                  {contact.url && (
                    <div className="flex items-center text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                      <span className="mr-2">Connect</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </div>
                  )}
                </div>
              </a>
            ))}
            <div
              className={`group bg-neutral-900 p-8 rounded-lg shadow-lg border border-neutral-700 from-indigo-400 to-indigo-600 hover:border-transparent transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`p-4 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <FaDiscord className="text-2xl text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    Discord
                  </h3>
                  <p className="text-neutral-300 group-hover:text-neutral-100 transition-colors duration-300 break-all">
                    @nonlooped
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA section */}
          <div className="mt-16 text-center">
            <div className="bg-neutral-900 p-8 rounded-lg shadow-lg border border-neutral-700 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-transparent px-2 rounded">
                  Extraordinary
                </span>
              </h3>
              <p className="text-neutral-300 mb-6">
                Whether you have a project in mind or just want to chat about
                tech, I&apos;m always excited to connect with fellow creators
                and innovators.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://twitter.com/nonlooped"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 ease-in-out"
                >
                  Follow on Twitter
                </a>
                <a
                  href="mailto:cored.developments@gmail.com"
                  className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-neutral-900 font-semibold py-2 px-6 rounded-md transition duration-200 ease-in-out"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
