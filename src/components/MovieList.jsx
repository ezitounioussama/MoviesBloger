import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, titleFilter, ratingFilter }) {
  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase())
    )
    .filter((movie) => movie.rating >= ratingFilter);

  return (
    <div className="flex justify-center items-center flex-wrap mb-10">
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterURL={movie.posterURL}
          description={movie.description}
          rating={movie.rating}
          trailer={movie.trailer}
        />
      ))}
    </div>
  );
}

export default MovieList;
