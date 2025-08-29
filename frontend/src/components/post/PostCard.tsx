import React from "react";
import type { Post } from "../../services/postsApi";

type PostCardProps = {
  post: Post;
  image?: string;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, description, date, readTime, image_url } = post;

  return (
    <div className="mb-8">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
        <a className="block">
          <img
            src={image_url}
            alt={`Image for ${title}`}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        </a>

        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 font-serif">
            <a className="hover:text-primary-600 transition-colors">{title}</a>
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
