import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PixiComponent from './Pages/PixiComponent'; // Import the PixiApp component
import Car from "./Pages/CarApp"; // Import the Car component

function App() {
  // Define your cars data for PixiApp
  const cars = [
    { name: 'Car 1', image: process.env.PUBLIC_URL + '/greenCar2.png', x: 100, y: 150 },
    { name: 'Car 2', image: process.env.PUBLIC_URL + '/greenCar.png', x: 200, y: 150 },
    // Add more cars as needed
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pixi" element={<PixiComponent id="pixi-component" cars={cars} />} /> 
        <Route path="/car" element={<Car />} /> 
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
