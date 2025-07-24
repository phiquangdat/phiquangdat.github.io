import React, { useState, useEffect } from "react";
import { getMovies, getFavoriteMovies } from "../../services/movieApi";

export default function MoviePage() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getFavoriteMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <div className="mx-auto px-4 pt-16">
      <h1 className="text-center font-bold text-2xl text-[#172554]">
        Movie Page
      </h1>

      <div className="flex items-center justify-center mx-auto px-4 pt-16 w-full gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col items-center justify-center gap-4"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-1/2 h-1/2 object-cover"
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
