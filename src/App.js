import React from 'react';
import WeatherComponent from './components/Sidebar';

function App() {
  return (
    <>
      <main className='w-screen h-screen px-20 py-16 bg-background'>
        <WeatherComponent />
      </main>
    </>
  );
}

export default App;
