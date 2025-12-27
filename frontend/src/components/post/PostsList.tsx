import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts, type Post } from "../../services/postsApi";
import Pagination from "../navigation/Pagination";
import DetailedPost from "./DetailedPost";
const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 3;

  const handleCardClick = (post: Post) => {
    setSelectedPost(post);
  };

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
      <div className="mt-20 flex">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPost.map((post: Post) => (
          <PostCard key={post.id} post={post} onCardClick={handleCardClick} />
        ))}
      </div>
      {selectedPost && (
        <DetailedPost
          post={selectedPost}
          onClose={() => {
            setSelectedPost(null);
          }}
        />
      )}
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </>
  );
};

export default PostsList;
