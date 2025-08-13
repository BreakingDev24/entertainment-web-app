import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const BookmarksPage = lazy(() => import("./BookmarkPage"));
const Home = lazy(() => import("./Home"));
const Movies = lazy(() => import("./Movies"));
const ResultPage = lazy(() => import("./ResultsPage"));
const TVShows = lazy(() => import("./TVShows"));

export default function AllRoutes() {
  return (
    <Suspense fallback={<div className="text-red-500">Loading Page</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/bookmark" element={<BookmarksPage />} />
        <Route path="/:section?/results" element={<ResultPage />} />
      </Routes>
    </Suspense>
  );
}
