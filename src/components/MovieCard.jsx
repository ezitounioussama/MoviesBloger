import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="bg-transparent py-6 mx-10 flex flex-col justify-center sm:py-12">
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
              <h2 className="text-3xl font-bold">{title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
                {rating}
              </div>
            </div>
            {/* <div>
              <div className="text-sm text-gray-400">Series</div>
              <div className="text-lg text-gray-800">2019</div>
            </div> */}
            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
              {description}
            </p>
            {/* <div className="flex text-2xl font-bold text-a">$83.90</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
