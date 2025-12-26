import React from "react";
import type { Post } from "../../services/postsApi";

type PostDetailModalProps = {
  post: Post;
  onClose: () => void;
};

import { icons } from "../../constants/techIcons";

const PostDetailModal: React.FC<PostDetailModalProps> = ({ post, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
        e.stopPropagation();
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold font-serif mb-4">{post.title}</h1>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-contain rounded-md mb-6"
        />
        <div className="flex flex-wrap gap-2.5">
          {post.languages?.map((lang) => {
            const fullTechKey = lang.toLowerCase().replace(/[\s\.\-]/g, "");

            if (icons[fullTechKey]) {
              return (
                <div
                  key={lang}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <img
                    src={icons[fullTechKey]}
                    alt={`${lang} icon`}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {lang}
                  </span>
                </div>
              );
            }

            return lang.split(/\s+/).map((word) => {
              const wordKey = word.toLowerCase().replace(/[\s\.\-]/g, "");
              const wordIcon = icons[wordKey];

              return (
                <div
                  key={`${lang}-${word}`}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  {wordIcon && (
                    <img
                      src={wordIcon}
                      alt={`${word} icon`}
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  )}
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {word}
                  </span>
                </div>
              );
            });
          })}
        </div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default PostDetailModal;
