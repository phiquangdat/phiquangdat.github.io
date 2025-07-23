import React from "react";
import PostCard from "./PostCard";
import { featuredPosts } from "../data/posts";

const FeaturedPosts = () => {
  return (
    <>
      <h4 className="text-lg text-gray-600 mb-6 italic">Featured:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <hr className="border-gray-200 my-8" />
    </>
  );
};

export default FeaturedPosts;
