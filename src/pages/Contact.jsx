export default function Contact() {
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

      <div className="relative z-10 max-w-2xl w-full px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out - I'd love to hear from you!
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium text-gray-300">Email</p>
                <a href="mailto:meryembannour3@gmail.com" className="text-blue-200 hover:underline text-lg">
                  meryembannour3@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <div>
                <p className="font-medium text-gray-300">Social Media</p>
                <div className="mt-1">
                  <a href="https://www.linkedin.com/in/maryem-bannour-299937311/" 
                     className="text-blue-200 hover:underline text-lg flex items-center gap-2">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}