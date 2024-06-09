import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import ClothingDisplay from './components/ClothingDisplay';

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
      <main className={`w-screen h-screen px-14 py-10 2xl:px-20 2xl:py-16 bg-background dark:bg-dark-background`}>
        <WeatherDisplay toggleDarkMode={toggleDarkMode} />
      </main>
      <ClothingDisplay link={"t-shirt.jpeg"} text={"White Shirt"} />
    </>
  );
}

export default App;
