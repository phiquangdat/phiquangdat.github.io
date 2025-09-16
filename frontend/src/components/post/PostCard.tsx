import React from "react";
import type { Post } from "../../services/postsApi";

type PostCardProps = {
  post: Post;
  image?: string;
};

const PostCard: React.FC<PostCardProps> = React.memo(({ post }) => {
  const { title, description, date, readTime, link, image_url } = post;

  return (
    <div className="my-8 w-400px">
      <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
        <a className="block">
          <img
            src={image_url}
            alt={`Image for ${title}`}
            className="border-b w-full h-48 object-contain rounded-b-none rounded-md mb-4"
          />
        </a>

        <div className="flex flex-col p-6">
          <div className="flex gap-2 text-xl font-bold text-gray-800 mb-3 font-serif">
            <a className="hover:text-primary-600 transition-colors">{title}</a>
            <a
              className="text-gray-600 hover:text-primary-600 transition-colors"
              href={link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          </div>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed h-[70px] overflow-hidden line-clamp-3">
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
});

export default PostCard;
