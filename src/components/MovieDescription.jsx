import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieDescription() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));

    const foundMovie = movies.find((m) => m.id === parseFloat(movieId));
    setMovie(foundMovie);

    console.log(foundMovie);
  }, [movieId]);

  return (
    <>
      {movie ? (
        <>
          {/* <MovieCard
            id={movie.id}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
            trailer={movie.trailer}
          /> */}
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl my-4">
              {movie.title}
            </h2>
            <div className="stack w-full">
              <div className="text-center border border-base-content card lg:w-[60%] sm:w-[100%] bg-base-100">
                <iframe
                  className="w-full rounded-2xl"
                  height="515"
                  src={movie.trailer}
                  title={movie.title}
                ></iframe>
              </div>
              <div className="text-center border border-base-content card lg:w-[60%] sm:w-[100%] bg-base-100">
                <div className="card-body mt-4">{movie.description}</div>
              </div>
              <div className="text-center border border-base-content card lg:w-[60%] sm:w-[100%] bg-base-100">
                <div className="card-body mt-4">{movie.rating}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <div className="flex justify-end mr-8">
        <Link
          className="m-4 group-even:roup flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-white  transition-colors hover:bg-gray/20 focus:outline-none focus:ring  w-56"
          to="/"
        >
          <span className="font-medium transition-colors group-hover:text-white ">
            Back to Home
          </span>

          <span className="flex-shrink-0 rounded-full border border-white p-2 group-active:border-gray/10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
}

export default MovieDescription;
