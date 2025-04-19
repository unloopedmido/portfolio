import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const handleSubmit = async (e: FormData) => {
    "use server";

    const start = Number(e.get("ts"));

    if (Date.now() - start < 3000) {
      throw new Error("Too fast");
    }

    const name = e.get("name");
    const email = e.get("email");
    const message = e.get("message");
    const website = e.get("website");

    if (website) {
      return;
    }

    try {
      const URL = process.env.DISCORD_WEBHOOK_URL as string;
      const body = {
        embeds: [
          {
            title: "New Contact Form Submission",
            color: 0xffcc00,
            author: {
              name: name,
            },
            description: `**Email:** ${email}\n**Message:** ${message}`,
            timestamp: new Date(),
          },
        ],
      };
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error sending message:", error.message);
      }
    }
  };

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
              A showcase of my recent work spanning web development, UI/UX
              design, and interactive experiences.
            </p>
          </div>
        </div>
        <form action={handleSubmit}>
          <div className="max-w-6xl mx-auto bg-neutral-900 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 bg-neutral-800 text-neutral-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
                minLength={3}
                maxLength={50}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-neutral-800 text-neutral-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
                minLength={5}
                maxLength={50}
              />
              <input type="text" name="website" className="hidden" />
              <input type="hidden" name="ts" value={Date.now()} />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={3760}
                name="message"
                className="w-full p-3 bg-neutral-800 text-neutral-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
              ></textarea>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out w-full">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
