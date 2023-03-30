import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, description, posterURL, rating, trailer }) => {
  return (
    <Link
      to={`/movies/${id}`}
      className="bg-transparent py-6 mx-10 flex flex-col justify-center sm:py-12"
    >
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src={posterURL}
              alt={title}
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold text-black/90">{title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
                {rating}
              </div>
            </div>
            <p className=" text-black/70 max-h-40 overflow-y-auto  scrollbar-hide">
              {description}
            </p>
            <Link
              className="group relative inline-flex w-44 items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              to={{
                pathname: `/movies/${id}`,
                state: {
                  movie: {
                    id,
                    title,
                    description,
                    posterURL,
                    rating,
                    trailer,
                  },
                },
              }}
            >
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                Watch Trailer
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
