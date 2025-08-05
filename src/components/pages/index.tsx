import { Routes, Route } from "react-router-dom";
import BookmarksPage from "./BookmarkPage";
import Home from "./Home";
import Movies from "./Movies";
import ResultPage from "./ResultsPage";
import TVShows from "./TVShows";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv" element={<TVShows />} />
      <Route path="/bookmark" element={<BookmarksPage />} />
      <Route path="/:section?/results" element={<ResultPage />} />
    </Routes>
  );
}
