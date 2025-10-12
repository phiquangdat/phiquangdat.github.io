import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navigation from "../components/navigation/Navigation";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navigation isScrolled={isScrolled} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
