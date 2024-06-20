import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wardrobe from "./pages/Wardrobe";
import DailyOutfitPage from "./pages/DailyOutfitPage";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route path="/" element={<Main />} />
        {/* DailyOutfit Route */}
        <Route path="/daily" element={<DailyOutfitPage />} />
        {/* Wardrobe Route */}
        <Route path="/wardrobe" element={<Wardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
