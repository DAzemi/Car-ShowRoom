import React, { useState, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Car from '../Components/Car';
import '../Styles/CarApp.css';
import carSound from "../Assets/Car/MazdaSound.wav"

function CarApp() {
  const [color, setColor] = useState('#ff0000'); // Initial color: red
  const [tireColor, setTireColor] = useState('#ffffff'); // Initial tire color: white
  const [isPlaying, setIsPlaying] = useState(false); // State to track audio playing status
  const audioRef = useRef();


  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle the playing status
  };


  const handleCarClick = () => {
    // Play the audio when the car is clicked
    audioRef.current.play();
  };

  const handleButtonClick = () => {
    // Play the audio when the button is clicked
    audioRef.current.play();
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1>Navbar</h1>
        </div>
      </nav>

      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Car color={color} tireColor={tireColor} onClick={handleCarClick} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>

      <div className='BoxContainer'>
        <h1>Mazda RX-7</h1>
        <p>Pick your car & tire colors</p>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ marginTop: '20px' }}
        />
        <input
          type="color"
          value={tireColor}
          onChange={(e) => setTireColor(e.target.value)}
          style={{ marginTop: '20px' }}
        />
      </div>

 {/* Button to toggle audio */}
      <button onClick={toggleAudio}>
        {isPlaying ? 'Make me stop' : 'Make me vroom'}
      </button>

      <footer className="footer">
        <div className="container">
          <p>Footer </p>
        </div>
        <audio ref={audioRef} src={carSound} />
      </footer>
    </>
  );
}

export default CarApp;
