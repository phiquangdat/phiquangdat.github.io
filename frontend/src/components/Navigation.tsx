import React, { useState } from "react";

const Navigation = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            className="flex items-center text-xl font-bold text-gray-800 hover:text-primary-600 transition-colors"
            href="#home"
          >
            <span className="text-2xl mr-2">🚀</span>
            <span className="font-serif">Dat Phi</span>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            <a
              className="text-gray-600 hover:text-primary-600 transition-colors"
              href="https://github.com/phiquangdat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              className="text-gray-600 hover:text-primary-600 transition-colors"
              href="mailto:datqphi@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
            <a
              className="text-gray-600 hover:text-primary-600 transition-colors"
              href="https://www.linkedin.com/in/phiquangdat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-1">
              <a
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                href="#tags"
                onClick={() => setIsMenuOpen(false)}
              >
                Tags
              </a>
              <a
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
