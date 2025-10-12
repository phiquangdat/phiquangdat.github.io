import React from "react";
import EduMap from "./EduMap";

const GitHubIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const About = () => {
  return (
    <div className="my-20 mx-auto max-w-4xl px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <EduMap />

      <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 font-serif">
              My Work
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Most of my projects focus on{" "}
              <span className="font-semibold text-gray-900">
                web development
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900">
                machine learning
              </span>
              , and{" "}
              <span className="font-semibold text-gray-900">data science</span>.
              I'm passionate about building solutions that combine elegant
              design with powerful functionality.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/phiquangdat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <GitHubIcon />
            <span className="font-semibold">View My GitHub</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
