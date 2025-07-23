import React, { useState, useEffect } from "react";
import HomeIntro from "./HomeIntro";
import FeaturedPosts from "./FeaturedPosts";
import PostsList from "./PostsList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Navigation from "./Navigation";

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
    <div className="App">
      <Navigation isScrolled={isScrolled} />
      <main className="container mx-auto px-4 pt-16">
        <HomeIntro />
        <FeaturedPosts />
        <PostsList />
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
