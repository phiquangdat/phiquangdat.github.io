import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MoviePage from "../components/movies/MoviePage";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <MoviePage />,
  },
]);
