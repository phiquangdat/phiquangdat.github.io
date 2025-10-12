import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MoviePage from "../components/movies/MoviePage";
import Layout from "../layout/Layout";
import Home from "../components/home/Home";
import About from "../components/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <MoviePage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
