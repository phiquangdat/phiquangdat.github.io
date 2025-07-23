import React, { useState, useEffect } from "react";
import HomeIntro from "./components/HomeIntro";
import FeaturedPosts from "./components/FeaturedPosts";
import PostsList from "./components/PostsList";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
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

export default App;
