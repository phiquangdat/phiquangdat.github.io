import { useState, useEffect } from "react";
import { getFavoriteMovies, getRatedTV } from "../../services/movieApi";
import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

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
      <h1 className="text-center font-bold text-3xl text-[#172554]">
        Movie Page
      </h1>
      <p className="text-center text-gray-500 mt-4">
        This is my favorite Movies/TV Shows. Hope we can get something in
        common.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto px-4 pt-16 w-full">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
        {tv.map((tv) => (
          <MovieCard movie={tv} key={tv.id} />
        ))}
      </div>
    </div>
  );
}
