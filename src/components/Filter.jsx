import React from "react";
import AddForm from "./AddForm";
function Filter({
  titleFilter,
  ratingFilter,
  onTitleFilterChange,
  onRatingFilterChange,
}) {
  return (
    <div className="flex justify-evenly items-center my-5">
      <div className="hidden sm:flex sm:gap-4">
        <div className="relative">
          <input
            type="range"
            min="5"
            max="9"
            value={ratingFilter}
            className="range"
            step="1"
            onChange={(event) => onRatingFilterChange(event.target.value)}
          />
          <div className="w-full flex justify-between text-xs ">
            <span className="mx-2 font-bold">5⭐</span>
            <span className="mx-2 font-bold">6⭐</span>
            <span className="mx-2 font-bold">7⭐</span>
            <span className="mx-2 font-bold">8⭐</span>
            <span className="mx-2 font-bold">9⭐</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <label className="sr-only" htmlFor="search">
          Search
        </label>

        <input
          className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Search Title..."
          value={titleFilter}
          onChange={(event) => onTitleFilterChange(event.target.value)}
        />

        <button
          type="button"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        >
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <AddForm />
    </div>
  );
}

export default Filter;
