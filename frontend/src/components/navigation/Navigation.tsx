import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-2xl shadow-blue-500/20"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600"
      }`}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a
            className="flex items-center text-xl font-bold text-white transition-all duration-300 group relative z-10"
            href="#home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 blur-xl rounded-full group-hover:bg-blue-300/50 transition-all"></div>
            </div>
            <span className="font-serif text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white group-hover:from-blue-100 group-hover:via-white group-hover:to-blue-100 transition-all duration-300">
              Dat Phi
            </span>
          </a>

          <div className="md:flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
            <NavBar title="Home" onClick={() => navigate("/")} />
            <NavBar title="Movies" onClick={() => navigate("/movies")} />
            <NavBar title="About" onClick={() => navigate("/about")} />
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              className="relative group p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.5)]"
              href="https://github.com/phiquangdat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl text-white"></i>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-sky-300 opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </a>
            <a
              className="relative group p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.5)]"
              href="mailto:datqphi@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl text-white"></i>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-sky-300 opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </a>
            <a
              className="relative group p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.5)]"
              href="https://www.linkedin.com/in/phiquangdat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl text-white"></i>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-sky-300 opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </a>
          </div>

          {/* Mobile Menu Button with Glow */}
          <button
            className="md:hidden relative p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.5)]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu with Glassmorphism */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 mb-4 shadow-2xl">
            <button
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-white font-medium hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 hover:translate-x-2"
            >
              <span className="flex items-center">
                <span className="mr-3 text-2xl">🏠</span>
                Home
              </span>
            </button>
            <button
              onClick={() => {
                navigate("/movies");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-white font-medium hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 hover:translate-x-2"
            >
              <span className="flex items-center">
                <span className="mr-3 text-2xl">🎬</span>
                Movies
              </span>
            </button>
            <button
              onClick={() => {
                navigate("/books");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-white font-medium hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 hover:translate-x-2"
            >
              <span className="flex items-center">
                <span className="mr-3 text-2xl">📚</span>
                Books
              </span>
            </button>
            <button
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-white font-medium hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 hover:translate-x-2"
            >
              <span className="flex items-center">
                <span className="mr-3 text-2xl">👤</span>
                About
              </span>
            </button>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-6 pb-4">
              <a
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
                href="https://github.com/phiquangdat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl text-white"></i>
              </a>
              <a
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
                href="mailto:datqphi@gmail.com"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-xl text-white"></i>
              </a>
              <a
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
                href="https://www.linkedin.com/in/phiquangdat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50"></div>
    </nav>
  );
};

export default Navigation;