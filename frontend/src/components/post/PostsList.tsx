import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import PostCard from "./PostCard";
import { getPosts, type Post } from "../../services/postsApi";
import { imageList } from "../../utils/generateImageList";
const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();

      setData(response);
    }

    fetchData();
  });
  const getRandomImage = useCallback(() => {
    return imageList[Math.floor(Math.random() * imageList.length)];
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
