import React from 'react';
import Homepage from './pages/Homepage';
import Wardrobe from './pages/Wardrobe';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <>
      <h1 className="text-teal-500">
        Hello world!
      </h1>
      <Button>Button Test</Button>
      <Homepage />
      <Wardrobe />
    </>
  );
}

export default App;
