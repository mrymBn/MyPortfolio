import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <span className="text-xl font-bold text-white">MB</span>
            <div className="flex gap-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-white/90 hover:text-white transition-colors ${isActive ? "font-medium text-white" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `text-white/90 hover:text-white transition-colors ${isActive ? "font-medium text-white" : ""}`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => 
                  `text-white/90 hover:text-white transition-colors ${isActive ? "font-medium text-white" : ""}`
                }
              >
                Skills
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-white/90 hover:text-white transition-colors ${isActive ? "font-medium text-white" : ""}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;