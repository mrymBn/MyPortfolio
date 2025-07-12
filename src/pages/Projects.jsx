import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Mobi-Dical",
      description: `MobiDical is an educational web application designed to support children with autism through interactive games and activities.
It allows parents to track their child’s progress in a simple and accessible way.`,
      tech: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      githubLink: "https://github.com/mrymBn/MobiDical",
      // demoLink: "#",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my skills and projects with modern design principles.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/mrymBn/MyPortfolio",
      // demoLink: "#",
    },
    {
      title: "Habit tracker App",
      description:
        "A cross-platform habit tracking app built with Flutter, featuring clean interfaces to help users build better routines through daily check-ins, progress visualization, and smart reminders.",
      tech: ["Flutter", "Dart", "Firebase"],
      githubLink: "",//lost the code of this project
      // demoLink: "#",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 15 + 5
              }s ease-in-out infinite both`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Projects
        </h1>
        <p className="text-lg text-blue-200 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my selected works demonstrating my skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-700"
            >
              <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <a
                    href={project.githubLink}
                    className="text-blue-300 hover:text-blue-100 font-medium flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {/* <a
                    href={project.demoLink}
                    className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
