import "./App.css";
import { useState, useEffect } from "react";
import Announcement from "./components/Announcement";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import AddForm from "./components/AddForm";
import MovieDescription from "./components/MovieDescription";
import { Routes, Route } from "react-router-dom";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );

  const handleAddMovie = (newMovie) => {
    // Update the state with the new movie
    setMovies([...movies, newMovie]);

    // Save the list of movies to localStorage
    const updatedMovies = [...movies, newMovie];
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="App">
      <Announcement />
      <div className="flex justify-evenly items-center my-5">
        <AddForm onAddMovie={handleAddMovie} />
        <Filter
          titleFilter={titleFilter}
          onTitleFilterChange={setTitleFilter}
          ratingFilter={ratingFilter}
          onRatingFilterChange={setRatingFilter}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              titleFilter={titleFilter}
              ratingFilter={ratingFilter}
              movies={movies}
            />
          }
        />
        <Route
          path={`/movies/:movieId`}
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
