import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import SearchForm from "./components/layout/SearchForm";

import MainSection from "./components/layout/MainSection";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-darkBlue grid min-h-screen gap-3.5 overflow-x-hidden lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr] lg:place-items-start">
          <header className="box-border md:px-6 md:pt-6 lg:col-start-1 lg:row-span-2 lg:h-screen lg:pb-6">
            <Navbar />
          </header>

          <div className="px-4 pb-3 md:px-6 lg:col-start-2 lg:row-span-2 lg:py-6">
            <SearchForm className="mb-3.5 lg:row-start-1" />
            <MainSection className="lg:row-start-2" />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
