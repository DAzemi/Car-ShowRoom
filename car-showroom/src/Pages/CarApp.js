import React, { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Navbar from "../Components/Navbar";
import Car from "../Components/Car";
import "../Styles/CarApp.css";
import carSound from "../Assets/Car/MazdaSound.wav";
import Footer from "../Components/Footer";
import { FaInfoCircle } from "react-icons/fa";
import mazda1 from "../img/mazda1.jpg";
import mazda3 from "../img/mazda3.avif";
import mazdatop3 from "../img/mazdatop3.jpg";

function CarApp() {
  const [color, setColor] = useState("#ff0000");
  const [tireColor, setTireColor] = useState("#ffffff");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleCarClick = () => {
    audioRef.current.play();
  };

  const handleButtonClick = () => {
    audioRef.current.play();
  };

  return (
    <>
      <Navbar />
      <Canvas  camera={{ position: [0, 5, 10], fov: 50  }}>
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Car color={color} tireColor={tireColor} onClick={handleCarClick} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>

      <div className="main-container">
        <div className="BoxContainer"  style={{ boxShadow: '0 20px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1>Mazda RX-7</h1>
          <p>Pick your car & tire colors</p>
          <div className="color-picker">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-input"
            />
            <input
              type="color"
              value={tireColor}
              onChange={(e) => setTireColor(e.target.value)}
              className="color-input"
            />
          </div>
          <button className="audio-button" onClick={toggleAudio}>
            {isPlaying ? "Make me stop" : "Make me vroom"}
          </button>
        </div>
      </div>
    <audio ref = {audioRef} src={carSound}/>
      <div className="summary-container">
        <div className="summary-left">
          <h1>Your RX-7 Configuration</h1>
          <p>
            Car Details: The Mazda RX-7 is an iconic sports car <br />
            that has left a lasting impact on automotive enthusiasts worldwide.{" "}
            <br />
            Here are some key details about this legendary vehicle
          </p>
          <p>
            The Mazda RX-7 is renowned for its exceptional performance
            capabilities.
            <br /> Equipped with a rotary engine, the RX-7 delivers impressive
            power and acceleration.
            <br /> Over the years, various iterations of the RX-7 have boasted
            different engine configurations,
            <br /> but they have consistently offered exhilarating performance
            on both the road and the track.
          </p>
          <div className="summary-item">
            <span className="info-container">
              <FaInfoCircle /> Information for our customers:
            </span>
            While we strive for accurate configurator visualizations, there are
            some options that may not be rendering accurately at this time. We
            are working on this, but in the meantime, we recommend consulting
            with your Porsche Center for the final details. Thank you!
          </div>
        </div>
        <div className="summary-right">
          <div className="summary-item">Performance: 300 HP</div>
          <div className="summary-item">Top Speed: 155 mph</div>
          <div className="summary-item">Price for Equipment: $35,000</div>
          <div className="summary-item">
            {" "}
            <h1>Total MSRP: $35,000</h1>
            <p>Monthly Payment: $2.213.21 </p>
          </div>
        </div>
      </div>

      <div className="technology-container">
        <h2 className="technology-header">Technology</h2>
        <div className="row">
          <div className="category">Category</div>
          <div className="option">Option</div>
          <div className="option-code">Option Code</div>
          <div className="price">Price</div>
        </div>
        <div className="line"></div>
        <div className="row">
          <div className="category">Engine</div>
          <div className="option">V6 Turbo</div>
          <div className="option-code">V6T</div>
          <div
            className="price"
            style={{ backgroundColor: "rgba(0, 255, 0, 0.1)" }}
          >
            $5,000
          </div>
        </div>
        <div className="row">
          <div className="category">Transmission</div>
          <div className="option">Automatic</div>
          <div className="option-code">AT</div>
          <div
            className="price"
            style={{ backgroundColor: "rgba(0, 255, 0, 0.1)" }}
          >
            $3,000
          </div>
        </div>
      </div>

      <div className="top-models-container">
        <h1>Top 3 Models</h1>
        <div className="top-models-images">
          <img className="zoom-hover" src={mazda1} alt="Model 1" />
          <img className="zoom-hover" src={mazda3} alt="Model 1" />
          <img className="zoom-hover" src={mazdatop3} alt="Model 1" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarApp;
