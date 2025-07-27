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

// Sample data for when API fails
const sampleMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    name: "Inception",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    vote_average: 8.4,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    name: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    vote_average: 9.3,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    name: "Pulp Fiction",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    vote_average: 8.9,
  },
];

const sampleTVShows: Movie[] = [
  {
    id: 4,
    title: "Breaking Bad",
    name: "Breaking Bad",
    poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    overview:
      "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future as a terminal illness puts his life at risk.",
    vote_average: 9.5,
  },
  {
    id: 5,
    title: "Game of Thrones",
    name: "Game of Thrones",
    poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    overview:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    vote_average: 9.3,
  },
  {
    id: 6,
    title: "The Office",
    name: "The Office",
    poster_path: "/qWnJzyZhyy74gjpSjIXWmK0ltD.jpg",
    overview:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    vote_average: 8.9,
  },
];

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

        // Use sample data if API returns empty arrays
        setMovies(
          moviesData && moviesData.length > 0 ? moviesData : sampleMovies
        );
        setTv(tvData && tvData.length > 0 ? tvData : sampleTVShows);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load movies and TV shows");
        // Use sample data when API fails
        setMovies(sampleMovies);
        setTv(sampleTVShows);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto px-4 pt-16 text-center">
        <h1 className="text-center font-extrabold text-4xl md:text-5xl text-[#083344] tracking-tight drop-shadow-lg mb-4">
          Movie Page
        </h1>
        <p className="text-center text-gray-500 mt-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto px-4 pt-16 text-center">
        <h1 className="text-center font-extrabold text-4xl md:text-5xl text-[#083344] tracking-tight drop-shadow-lg mb-4">
          Movie Page
        </h1>
        <p className="text-center text-red-500 mt-4">{error}</p>
        <p className="text-center text-gray-500 mt-2">
          Showing sample data instead.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 pt-16 text-center">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl text-[#083344] tracking-tight drop-shadow-lg mb-4">
        Movie Page
      </h1>
      <p className="text-center text-gray-500 mt-4">
        This is my favorite Movies/TV Shows. Hope we can get something in
        common.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto px-4 pt-16 w-full">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        {tv &&
          tv.length > 0 &&
          tv.map((tv) => <MovieCard movie={tv} key={tv.id} />)}
        {(!movies || movies.length === 0) && (!tv || tv.length === 0) && (
          <div className="col-span-full text-center text-gray-500">
            No movies or TV shows found.
          </div>
        )}
      </div>
    </div>
  );
}
