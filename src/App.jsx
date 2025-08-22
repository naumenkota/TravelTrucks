import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import CamperPage from "./pages/CamperPage/CamperPage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:camperId" element={<CamperPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
