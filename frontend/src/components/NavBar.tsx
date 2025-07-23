import React from "react";

export default function NavBar({ title }: { title: string }) {
  return (
    <div className="md:flex items-center space-x-4 gap-4">
      <a
        className="text-gray-600 hover:text-primary-600 transition-colors font-bold tracking-wide text-lg hover:scale-105"
        href="#home"
      >
        {title}
      </a>
    </div>
  );
}
