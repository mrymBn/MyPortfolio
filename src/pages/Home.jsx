export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 text-white px-4 text-center relative overflow-hidden">
      {/* Effet de particules élégant */}
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
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Maryeem Bannour
          <span className="block text-2xl md:text-3xl font-light mt-4 text-blue-200">
            Web Developer & Digital Creator
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto">
          I specialize in building <span className="font-semibold text-blue-100">modern web applications</span> with clean code and intuitive user experiences. Let's collaborate to bring your digital vision to life.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/projects" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View My Work
          </a>
          
          <a 
            href="/contact" 
            className="border-2 border-white/50 hover:border-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Indicateur de défilement animé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}