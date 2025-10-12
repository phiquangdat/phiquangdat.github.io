import React from "react";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-4xl mb-12 gap-8 items-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative w-52 h-52 overflow-hidden rounded-full shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
          <img
            src="https://behktimywwtdkxmpursa.supabase.co/storage/v1/object/public/images/DatPhi%20-%20photo.png"
            alt="dat phi cover"
            className="w-full h-full object-cover object-[50%_10%]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-2 font-serif tracking-tight">
            Dat Phi
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
          Hi, I'm Dat. A{" "}
          <span className="font-semibold text-gray-800 relative inline-block">
            Full-Stack Developer
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </span>{" "}
          who builds modern, user-friendly web applications.
        </p>

        <p
          className="text-sky-800 hover:text-sky-600 hover:underline cursor-pointer "
          onClick={() => navigate("/about")}
        >
          Read more
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-500 font-medium">
            Available for projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
