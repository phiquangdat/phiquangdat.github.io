import React, { useState, useEffect } from "react";
import {
  getMovies,
  getFavoriteMovies,
  getRatedTV,
} from "../../services/movieApi";

export default function MoviePage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [tv, setTv] = useState<any[]>([]);

  useEffect(() => {
    getFavoriteMovies().then((movies) => {
      setMovies(movies);
    });
    getRatedTV().then((tv) => {
      setTv(tv);
    });
  }, []);

  return (
    <div className="mx-auto px-4 pt-16 text-center">
      <h1 className="text-center font-bold text-2xl text-[#172554]">
        Movie Page
      </h1>
      <p className="text-center text-gray-500 mt-4">
        This is my favorite Movies/TV Shows. Hope we can get something in
        common.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto px-4 pt-16 w-full gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col items-center justify-between max-w-xs mx-auto gap-4"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="object-cover w-full h-2/3"
            />
            <h2 className="mt-2 font-bold">{movie.title}</h2>
            <p className="text-sm text-gray-500 w-full line-clamp-3">
              {movie.overview}
            </p>
            <span></span>
          </div>
        ))}
        {tv.map((tv) => (
          <div
            key={tv.id}
            className="flex flex-col m-4 items-center justify-center gap-4"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              alt={tv.name}
              className="object-cover"
            />
            <h2 className="mt-2 font-bold">{tv.name}</h2>
            <p className="text-sm text-gray-500 line-clamp-3">{tv.overview}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg text-gray-500 font-bold">
                My Rating:
              </span>
              <span className="text-sm text-gray-500">{tv.rating}/10</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
