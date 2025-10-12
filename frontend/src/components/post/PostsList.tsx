import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts, type Post } from "../../services/postsApi";
import Pagination from "../navigation/Pagination";
const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const { data: post, total } = await getPosts();
        if (!mounted) return;

        setData(post);
        setTotalPage(Math.ceil(total / perPage));
      } catch (err) {
        console.error("Failed to load posts:", err);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [page]);

  const startIndex = (page - 1) * perPage;
  const filteredPost = data.slice(startIndex, startIndex + perPage);
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {filteredPost.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </>
  );
};

export default PostsList;
