import "./App.css";
import { useState } from "react";
import Announcement from "./components/Announcement";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import AddForm from "./components/AddForm";
import MovieDescription from "./components/MovieDescription";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      rating: 8.3,
      trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
      descriptionPageURL: "/movies/1",
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 9.2,
      trailer: "https://www.youtube.com/embed/UaVTIH8mujA",
      descriptionPageURL: "/movies/2",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 5.5,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
      descriptionPageURL: "/movies/3",
    },
    {
      id: 4,
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
      rating: 6.9,
      trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo",
      descriptionPageURL: "/movies/4",
    },
  ]);

  const onAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <Announcement />
      <div className="flex justify-evenly items-center my-5">
        <AddForm onAddMovie={onAddMovie} />
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
      <Footer />
    </div>
  );
}

export default App;
