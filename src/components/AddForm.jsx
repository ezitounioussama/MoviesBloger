import React, { useState } from "react";

function AddForm() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const Submit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: title,
      rate: rate,
      url: url,
      description: description,
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
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3> */}
          <form className="py-4 flex flex-col justify-center items-center">
            <div className="form-control my-2">
              <label className="input-group ">
                <span>Title</span>
                <input
                  type="text"
                  placeholder="Enter Title 💬"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="form-control my-2">
              <label className="input-group">
                <span>Rate</span>
                <input
                  type="number"
                  placeholder="Enter Rate ⭐"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="form-control my-2">
              <label className="input-group">
                <span>Url</span>
                <input
                  type="number"
                  placeholder="Enter Url 🔗"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="form-control my-2">
              <textarea
                className="textarea textarea-bordered w-96"
                placeholder="Movie Description"
              ></textarea>
            </div>
            <div className="form-control my-2">
              <button className="inline-block rounded border border-current px-8 py-3 mt-4 text-sm font-medium text-gray-200 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
                Download
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
}

export default AddForm;
