import React from "react";

const PostCard = ({ post }) => {
  const { title, description, date, readTime, icon, link = "#" } = post;

  return (
    <div className="mb-8">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
        <a href={link} className="block">
          <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <i className={`${icon} text-4xl text-white`}></i>
          </div>
        </a>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 font-serif">
            <a href={link} className="hover:text-primary-600 transition-colors">
              {title}
            </a>
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-xs text-gray-500">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
