import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MoviePage from "../components/MoviePage";
import Home from "../components/Home";

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
