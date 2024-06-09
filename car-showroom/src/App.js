import './App.css';
import Car from "./Pages/CarApp";
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </Router>
  );
}

export default App;
