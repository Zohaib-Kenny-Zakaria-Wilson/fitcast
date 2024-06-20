import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wardrobe from "./pages/Wardrobe";
import DailyOutfitPage from "./pages/DailyOutfitPage";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* DailyOutfit Route */}
        <Route path="/" element={<DailyOutfitPage />} />
        {/* Wardrobe Route */}
        <Route path="/wardrobe" element={<Wardrobe />} />
        {/* Settings Route */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
