import React, { useState, useEffect } from "react";
import HomeIntro from "./HomeIntro";
import PostsList from "../post/PostsList";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <main className="container mx-auto px-4 pt-16">
        <HomeIntro />
        <PostsList />
      </main>
    </div>
  );
}

export default Home;
