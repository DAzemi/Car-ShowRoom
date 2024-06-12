import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PixiComponent from './Pages/PixiComponent'; 
import Car from "./Pages/CarApp"; 
import Entry from './Pages/Entry';

function App() {

  const cars = [
    { name: 'Car 1', image: process.env.PUBLIC_URL + '/greenCar2.png', x: 100, y: 150 },
    { name: 'Car 2', image: process.env.PUBLIC_URL + '/greenCar.png', x: 200, y: 150 },

  ];

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Entry />}/>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/pixiGame" element={<PixiComponent id="pixi-component" cars={cars} />} /> 
        <Route path="/car" element={<Car />} /> 
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
