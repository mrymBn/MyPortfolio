import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-indigo-500" },
  { name: "JavaScript", level: 95, color: "bg-yellow-500" },
  { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "UI/UX Design", level: 75, color: "bg-purple-500" }
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 md:px-12 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          My Skills
        </motion.h1>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className={`${skill.color} h-2.5 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}