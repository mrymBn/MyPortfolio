export default function Skills() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"].map(skill => (
          <span key={skill} className="bg-gray-100 px-4 py-2 rounded-full shadow text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
