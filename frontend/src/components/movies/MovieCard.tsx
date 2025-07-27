import { type Movie } from "./MoviePage";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 transition-transform hover:scale-105 group overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="object-cover mx-auto w-full h-80 rounded-md mb-4 transition-all duration-300"
      />
      <h2 className="font-bold text-lg mb-2">{movie.title || movie.name}</h2>
      <p className="text-sm text-gray-500 line-clamp-3 mb-2">
        {movie.overview}
      </p>
      <div className="flex items-center justify-center gap-2 mt-auto">
        <span className="text-base text-gray-500 font-bold">Rating:</span>
        <span className="text-sm text-gray-700">{movie.vote_average}/10</span>
      </div>
    </div>
  );
}
