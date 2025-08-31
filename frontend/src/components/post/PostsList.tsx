import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts, type Post } from "../../services/postsApi";
import Pagination from "../home/Pagination";
const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 2;

  useEffect(() => {
    async function fetchData() {
      const { data: post, total } = await getPosts(page, perPage);

      setData(post);
      setTotalPage(Math.ceil(total / perPage));
    }

    fetchData();
  }, [page, data]);

  return (
    <p>
      <div className="mt-8 grid grid-cols-3 gap-10">
        {data.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </p>
  );
};

export default PostsList;
