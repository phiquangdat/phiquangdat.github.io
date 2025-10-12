import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
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

          <div className="md:flex items-center space-x-4 gap-4">
            <NavBar
              title="Home"
              onClick={() => {
                navigate("/");
              }}
            />
            <NavBar
              title="Movies"
              onClick={() => {
                navigate("/movies");
              }}
            />
            <NavBar
              title="Books"
              onClick={() => {
                navigate("/books");
              }}
            />
            <NavBar
              title="About"
              onClick={() => {
                navigate("/about");
              }}
            />
          </div>

          <div className="md:flex items-center space-x-4 gap-4">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
