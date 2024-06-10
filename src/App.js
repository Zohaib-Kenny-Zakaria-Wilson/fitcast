import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import TodayOutfitContainer from './components/TodayOutfitContainer';

function App() {
  // State to toggle dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Toggles the dark mode on and off
   * @returns {void}
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <main className={`w-screen h-screen flex gap-20 px-14 py-10 2xl:px-20 2xl:py-16 bg-background dark:bg-dark-background`}>
        <WeatherDisplay toggleDarkMode={toggleDarkMode} />
        <TodayOutfitContainer />
      </main>
    </>
  );
}

export default App;
