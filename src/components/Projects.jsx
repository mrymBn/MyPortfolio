export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
          <p>A responsive portfolio website built with React and Tailwind CSS, hosted on Vercel.</p>
          <a href="#" className="text-blue-600 mt-3 inline-block underline">View Project</a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Business Landing Page</h3>
          <p>A sleek landing page for a fictional hair salon, mobile-first and modern.</p>
          <a href="#" className="text-blue-600 mt-3 inline-block underline">View Project</a>
        </div>
      </div>
    </section>
  );
}
