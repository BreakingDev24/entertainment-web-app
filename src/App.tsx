import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { useSearchByTypeQuery } from "./features/tmdb/tmdbApi";
import { useState } from "react";
import SearchForm from "./components/layout/SearchForm";

import MainSection from "./components/layout/MainSection";
type SearchType = "movie" | "multi" | "tv";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-darkBlue min-h-screen">
          <Navbar />
          <SearchForm />
          <MainSection />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
