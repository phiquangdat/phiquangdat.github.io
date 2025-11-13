import React from "react";

export default function NavBar({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div className="md:flex items-center space-x-4 gap-4">
      <a
        className="text-white hover:text-primary-600 transition-colors font-bold tracking-wide text-lg hover:scale-105 cursor-pointer"
        onClick={onClick}
      >
        {title}
      </a>
    </div>
  );
}
