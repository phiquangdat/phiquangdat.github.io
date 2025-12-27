import React from "react";
import EduMap from "./EduMap";
import GitHubStats from "./GithubStats";
import { GitHubCalendar } from "react-github-calendar";

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const About = () => {
  return (
    <div className="py-20 mx-auto max-w-6xl px-6 bg-[#f8fafc]">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">
          My Biography
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About Me
        </h1>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-2xl">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              My Work & Passion
            </h2>
          </div>
          <p className="text-gray-600 text-xl leading-relaxed mb-8">
            I specialize in{" "}
            <span className="text-blue-600 font-semibold underline decoration-2 underline-offset-4">
              Web Development
            </span>
            , blending robust{" "}
            <span className="text-gray-900 font-medium">Machine Learning</span>{" "}
            models with seamless user experiences. I believe in code that solves
            real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/transcript_record.pdf"
              target="_blank"
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
            >
              Download Transcript
            </a>
            <a
              href="https://github.com/phiquangdat"
              target="_blank"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold hover:border-blue-500 transition-all flex items-center gap-2"
            >
              <GitHubIcon /> GitHub Profile
            </a>
          </div>
        </div>

        <div className="md:col-span-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              GitHub Contributions
            </h3>
            <a
              href="https://github.com/phiquangdat"
              target="_blank"
              className="text-xs text-blue-500 hover:underline"
            >
              View on GitHub →
            </a>
          </div>

          <div className="flex justify-center overflow-x-auto custom-scrollbar">
            <GitHubCalendar
              username="phiquangdat"
              colorScheme="light"
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
          </div>
        </div>

        <div className="md:col-span-12 bg-white rounded-3xl px-8 py-4 shadow-sm border border-gray-100 overflow-hidden">
          <EduMap />
        </div>
      </div>
    </div>
  );
};

export default About;
