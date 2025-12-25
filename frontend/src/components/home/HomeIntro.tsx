import React from "react";
import { FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="space-y-8 mx-auto">
        <div className="flex gap-12 items-end space-y-3">
          <div className="relative w-52 h-52 overflow-hidden rounded-full shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
            <img
              src="https://behktimywwtdkxmpursa.supabase.co/storage/v1/object/public/images/DatPhi%20-%20photo.png"
              alt="dat phi cover"
              className="w-full h-full object-cover object-[50%_10%]"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight">
              Dat Phi
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          I specialize in building scalable web applications with modern technologies. 
          My work focuses on delivering robust solutions that combine technical excellence 
          with exceptional user experience.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a 
            href="/Dat Phi Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
          >
            <FileText className="w-4 h-4" />
            RESUME
          </a>
          
          <a 
            href="/Transcript Record.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            TRANSCRIPT
          </a>
          
          <button
            onClick={() => navigate("/about")}
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors duration-200"
          >
            ABOUT ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;