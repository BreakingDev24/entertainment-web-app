import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { useSearchByTypeQuery } from "./features/tmdb/tmdbApi";
import { useState } from "react";
import SearchForm from "./components/layout/SearchForm";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import TVShows from "./components/pages/TVShows";
import ResultPage from "./components/pages/ResultsPage";
import BookmarksPage from "./components/pages/BookmarkPage";
type SearchType = "movie" | "multi" | "tv";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-darkBlue min-h-screen">
          <Navbar />
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVShows />} />
            <Route path="/bookmark" element={<BookmarksPage />} />
            <Route path="/:section?/results" element={<ResultPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
