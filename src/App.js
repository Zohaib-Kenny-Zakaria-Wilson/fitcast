import React from 'react';
import Homepage from './pages/Homepage';
import WeatherComponent from './components/Sidebar';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <>
      <main className='w-screen h-screen px-20 py-16'>
        <WeatherComponent />
      </main>

      <h1 className="text-teal-500">
        Hello world!
      </h1>
      <Button>Button Test</Button>
      <Homepage />
      {/* <Wardrobe /> */}
    </>
  );
}

export default App;
