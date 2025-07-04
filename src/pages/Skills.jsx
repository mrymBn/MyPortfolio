export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Firebase"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
    }
  ];

  return (
    <section className="py-20 bg-white px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development world.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-center text-blue-600">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="mb-6 opacity-90">
            I'm committed to staying updated with the latest web technologies and best practices. 
            Currently learning about advanced React patterns and performance optimization.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-full bg-white/20 rounded-full h-2.5">
              <div className="bg-white h-2.5 rounded-full" style={{width: '75%'}}></div>
            </div>
            <span className="text-sm">React Mastery: 75%</span>
          </div>
        </div>
      </div>
    </section>
  );
}