import React, { useState } from "react";
import PropTypes from "prop-types";
function AddForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  AddForm.propTypes = {
    onAddMovie: PropTypes.func.isRequired,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      id: Math.random(),
      title: title,
      description: description,
      posterURL: url,
      rating: rate,
    };
    onAddMovie(newMovie);
    setTitle("");
    setRate("");
    setUrl("");
    setDescription("");
  };

  return (
    <div>
      <label
        htmlFor="my-modal-4"
        title="Add A Movie"
        className="btn btn-circle btn-outline"
      >
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <form
            className="py-4 flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="form-control my-2">
              <label className="input-group ">
                <span>Title</span>
                <input
                  type="text"
                  placeholder="Enter Title 💬"
                  className="input input-bordered w-full max-w-xs"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
            </div>
            <div className="form-control my-2">
              <label className="input-group">
                <span>Rate</span>
                <input
                  min="5"
                  type="text"
                  placeholder="Enter Rate ⭐"
                  className="input input-bordered w-full max-w-xs"
                  value={rate}
                  onChange={(event) => setRate(event.target.value)}
                />
              </label>
            </div>
            <div className="form-control my-2">
              <label className="input-group">
                <span>Url</span>
                <input
                  type="text"
                  placeholder="Enter Url 🔗"
                  className="input input-bordered w-full max-w-xs"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </label>
            </div>
            <div className="form-control my-2">
              <textarea
                className="textarea textarea-bordered w-96"
                placeholder="Movie Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className="form-control my-2">
              <button
                type="submit"
                className="inline-block rounded border border-current px-8 py-3 mt-4 text-sm font-medium text-gray-200 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
              >
                Add Movie
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
}

export default AddForm;
