import React from "react";
import MovieCard from "./MovieCard";
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    rating: 8.3,
  },
  {
    id: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.2,
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 5.5,
  },
  {
    id: 4,
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterURL:
      "https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg",
    rating: 6.9,
  },
];
function MovieList({ titleFilter, ratingFilter }) {
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
          title={movie.title}
          posterURL={movie.posterURL}
          description={movie.description}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
