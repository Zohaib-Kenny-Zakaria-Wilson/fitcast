import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wardrobe from './pages/Wardrobe';
import DailyOutfitPage from './pages/DailyOutfitPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* DailyOutfit Route */}
        <Route path="/" element={
           <DailyOutfitPage />
        } />
        {/* Wardrobe Route */}
        <Route path="/wardrobe" element={<Wardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
