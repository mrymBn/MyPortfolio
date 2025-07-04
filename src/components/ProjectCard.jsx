import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${project.bgColor} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all`}
    >
      <div className="h-48 flex items-center justify-center">
        <span className="text-gray-500 text-lg">Project Preview</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-white/80 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1"
        >
          View Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}