import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts, type Post } from "../../services/postsApi";
import Pagination from "../home/Pagination";
const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const { data: post, total } = await getPosts(1, 2);

      setData(post);
      setTotalPage(total);
    }

    fetchData();
  });

  return (
    <p>
      <div className="mt-8 grid grid-cols-3 gap-10">
        {data.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={1} totalPage={totalPage} setPage={setPage} />
    </p>
  );
};

export default PostsList;
