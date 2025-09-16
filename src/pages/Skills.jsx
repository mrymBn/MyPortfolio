export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "JavaScript",
        "React",
        "Flutter",
        "Dart",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Java", "MongoDB", "MySQL", "Firebase"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    },
    {
      category: "Certifications",
      skills: [
        {
          name: "Cisco – Introduction to Cybersecurity",
          link: "https://www.credly.com/badges/d18c7f00-582c-4591-a2c1-2eadcf9afd06/public_url",
          image: "/certificates/certificatCyberCisco.jpg",
        },
      ],
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
          My Skills
        </h1>
        <p className="text-lg text-blue-200 mb-12 text-center max-w-2xl mx-auto">
          Tools and technologies I use to build modern and user-friendly web &
          mobile applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-blue-200">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) =>
                  typeof skill === "string" ? (
                    <span
                      key={i}
                      className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ) : (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-white"
                    >
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {skill.name}
                      </a>
                      <a
                        href={skill.image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-12 w-auto rounded-md border border-gray-600 shadow-sm hover:scale-105 transition-transform"
                        />
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
