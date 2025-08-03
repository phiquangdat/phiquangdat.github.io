import React from "react";
import { useCallback } from "react";
import PostCard from "./PostCard";
import { allPosts } from "../../data/posts.js";
import { imageList } from "../../utils/generateImageList";
const PostsList = () => {
  const getRandomImage = useCallback(() => {
    return imageList[Math.floor(Math.random() * imageList.length)];
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allPosts.map((post: any) => (
        <PostCard key={post.id} post={post} image={getRandomImage()} />
      ))}
    </div>
  );
};

export default PostsList;
