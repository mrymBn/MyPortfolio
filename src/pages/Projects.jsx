import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern online store with React and Node.js backend",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    bgColor: "bg-gradient-to-r from-blue-100 to-indigo-100"
  },
  {
    title: "Portfolio Template",
    description: "Minimalist portfolio for creative professionals",
    tags: ["Next.js", "Tailwind CSS"],
    link: "#",
    bgColor: "bg-gradient-to-r from-purple-100 to-pink-100"
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white px-6 md:px-12 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Selected Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}