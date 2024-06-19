import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wthr from './components/Wthr';
import TodayOutfitContainer from './components/TodayOutfitContainer';
import Wardrobe from './components/Wardrobe';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={
          <main className={`w-screen flex gap-14 h-screen px-14 py-10 2xl:px-20 2xl:py-16 bg-background dark:bg-dark-background`}>
            <Wthr />
            <div className="flex flex-col w-full h-screen rounded-lg gap-9 bg-background dark:bg-dark-background">
            <NavBar />
            <TodayOutfitContainer />
            </div>
            
          </main>
        } />
        {/* Wardrobe Route */}
        <Route path="/wardrobe" element={<Wardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
