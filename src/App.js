import React from 'react';
import Homepage from './pages/Homepage';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <>
      <Sidebar />
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
