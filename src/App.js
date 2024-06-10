import React, { useState } from 'react';
import Wthr from './components/Wthr';
import ClothingItem from './components/ClothingItem';

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
        <Wthr toggleDarkMode={toggleDarkMode} />
      </main>
      <ClothingItem link={"t-shirt.jpeg"} text={"White Shirt"} color={"#9E9E9E"} textColor={"#262626"} />
    </>
  );
}

export default App;
