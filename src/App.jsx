import "./App.css";
import { useState } from "react";
import Announcement from "./components/Announcement";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setratingFilter] = useState(0);

  return (
    <div className="App">
      <Announcement />

      <Filter
        titleFilter={titleFilter}
        onTitleFilterChange={setTitleFilter}
        ratingFilter={ratingFilter}
        onRatingFilterChange={setratingFilter}
      />
      <MovieList titleFilter={titleFilter} ratingFilter={ratingFilter} />
      <Footer />
    </div>
  );
}

export default App;
