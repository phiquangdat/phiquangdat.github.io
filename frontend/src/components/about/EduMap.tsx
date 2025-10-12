import React from "react";

const educationHistory = [
  {
    year: "2024 - Present",
    degree: "Bachelor of Science in Information Technology",
    institution: "Vaasa University of Applied Sciences (VAMK)",
    description:
      "Focused on web development, database management, and network security. Completed a final project on a full-stack application.",
    status: "current",
  },
  {
    year: "2023",
    degree: "Bachelor of Science in Computer Science",
    institution:
      "University of Information Technology (UIT) - Vietnam National University",
    description:
      "Specialized in software engineering and artificial intelligence. Thesis on machine learning models for predictive analysis.",
    status: "completed",
  },
];

const EduMap = () => {
  return (
    <div className="relative">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
          Education Journey
        </h2>
        <p className="text-gray-600">
          My academic background and learning path
        </p>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-400 to-gray-300"></div>

        <div className="flex flex-col space-y-10">
          {educationHistory.map((edu, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute left-[-27px] md:left-[-31px] top-2 h-6 w-6 rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-125 ${
                  edu.status === "current"
                    ? "bg-blue-500 animate-pulse"
                    : "bg-purple-500"
                }`}
              >
                {edu.status === "current" && (
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                )}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === "current"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {edu.year}
                  </span>
                  {edu.status === "current" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <div className="flex items-start gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-base font-medium text-gray-700 leading-relaxed">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EduMap;
