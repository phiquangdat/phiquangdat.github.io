import React from "react";
import type { Post } from "../../services/postsApi";

type PostDetailModalProps = {
  post: Post;
  onClose: () => void;
};

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
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default PostDetailModal;
