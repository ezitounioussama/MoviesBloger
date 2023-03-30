import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription(props) {
  const { movieId } = useParams();

  const movie = props.movies.find((m) => m.id === parseInt(movieId));
  //   console.log(movie);
  return (
    // <div>
    //   <h2>{movie.title}</h2>
    //   <p>{movie.description}</p>
    //   <iframe
    //     width="560"
    //     height="315"
    //     src={movie.trailer}
    //     title={movie.title}
    //   ></iframe>
    //   <Link to="/">Back to Home</Link>
    // </div>
    <>
      <div className="mx-auto  text-center">
        <h2 class="text-3xl font-bold sm:text-4xl my-4">{movie.title}</h2>
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
            <div className="card-body mt-4">B</div>
          </div>
          <div className="text-center border border-base-content card lg:w-[60%] sm:w-[100%] bg-base-100">
            <div className="card-body mt-4">C</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-8">
        <Link
          class="m-4 group-even:roup flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-white  transition-colors hover:bg-gray/20 focus:outline-none focus:ring  w-56"
          to="/"
        >
          <span class="font-medium transition-colors group-hover:text-white ">
            Back to Home
          </span>

          <span class="flex-shrink-0 rounded-full border border-white p-2 group-active:border-gray/10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
