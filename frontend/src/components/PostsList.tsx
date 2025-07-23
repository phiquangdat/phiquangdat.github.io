import React from "react";
import PostCard from "./PostCard";
import { allPosts } from "../data/posts.js";

const PostsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allPosts.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
