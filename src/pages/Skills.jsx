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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 py-20 relative overflow-hidden">
      {/* Particle background */}
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
              animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite both`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Skills
        </h1>
        <p className="text-lg text-blue-200 mb-12 text-center max-w-2xl mx-auto">
          Technologies I work with regularly.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-center text-blue-200">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-blue-200">Continuous Learning</h3>
          <p className="mb-6 text-gray-300">
            Currently learning about advanced React patterns and performance optimization.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-400 h-2.5 rounded-full" style={{width: '75%'}}></div>
            </div>
            <span className="text-sm text-gray-300">React Mastery: 75%</span>
          </div>
        </div>
      </div>
    </section>
  );
}