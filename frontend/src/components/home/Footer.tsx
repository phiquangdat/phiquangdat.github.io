import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-16 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <ul className="flex justify-center space-x-8 mb-4 text-sm">
          <li>
            <a
              href="#home"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="mailto:datqphi@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="text-sm text-gray-500">
          © Dat Phi | Made with passion and curiosity
        </div>
      </div>
    </footer>
  );
};

export default Footer;
