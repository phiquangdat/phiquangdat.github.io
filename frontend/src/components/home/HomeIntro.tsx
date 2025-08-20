import React from "react";

const HomeIntro = () => {
  return (
    <div className="flex max-w-4xl mb-12 gap-6 items-center">
      <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden p-4">
        <img
          src="https://img.freepik.com/premium-vector/vector-illustration-cute-wolf-drawing-colouring-activity_925324-10412.jpg?w=360"
          alt="dat phi cover"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
          Dat Phi
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          Hi! I'm Dat. Welcome to my place
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
