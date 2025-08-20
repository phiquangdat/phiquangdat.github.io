import { useState, useEffect } from "react";
import { getFavoriteMovies, getRatedTV } from "../../services/movieApi";
import MovieCard from "./MovieCard";
import { ArrowLeft } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [moviesData, tvData] = await Promise.all([
          getFavoriteMovies(),
          getRatedTV(),
        ]);

        setMovies(moviesData || []);
        setTv(tvData || []);
      } catch (err) {
        if (err instanceof Error && err.message.includes("404")) {
          console.error("Error fetching data:", err);
          setError("Failed to load movies and TV shows");
          setMovies([]);
          setTv([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto px-4 pt-16">
      <a
        href="/"
        className="inline-flex justify-center items-center px-4 py-2 rounded hover:bg-gray-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        <span className="text-gray-600 transition-colors font-medium">
          Back to Home
        </span>
      </a>
      <h1 className="text-center font-extrabold text-4xl md:text-5xl text-[#083344] tracking-tight drop-shadow-lg mb-4">
        Movie Page
      </h1>
      <p className="text-center text-gray-500 mt-4">
        This is my favorite Movies/TV Shows. Hope we can get something in
        common.
      </p>

      {loading && (
        <p className="col-span-full text-center text-gray-500 mt-4">
          Loading...
        </p>
      )}
      {error && (
        <p className="col-span-full text-center text-red-500 mt-4">{error}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto px-4 pt-16 w-full">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        {tv &&
          tv.length > 0 &&
          tv.map((tv) => <MovieCard movie={tv} key={tv.id} />)}
      </div>
    </div>
  );
}
