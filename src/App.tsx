import { BrowserRouter } from "react-router-dom";
import "./App.css";

import MainLayout from "./components/layout/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
