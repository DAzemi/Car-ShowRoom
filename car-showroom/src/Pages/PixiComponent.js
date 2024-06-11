import React, { useEffect, useRef, useState } from 'react';
import { Application, Sprite, Texture, Text } from 'pixi.js';

const PixiComponent = ({ cars }) => {
  const pixiContainer = useRef(null);
  const appRef = useRef(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [keys, setKeys] = useState({});
  const [raceEnded, setRaceEnded] = useState(false);

  useEffect(() => {
    try {
      // Initialize Pixi Application
      const app = new Application({
        width: window.innerWidth, // Set width to window width
        height: window.innerHeight, // Set height to window height
        backgroundColor: 0xFF7F50,
        antialias: true,
      });

      // Attach the Pixi Application view to the DOM
      if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.view);
      } else {
        console.error('pixiContainer.current is null');
        return;
      }

      // Save app instance to ref
      appRef.current = app;

      console.log('PixiJS application created:', app);

      // Load images and add cars to the stage once loaded
      cars.forEach((car, index) => {
        const image = new Image();
        image.onload = () => {
          const texture = Texture.from(image);
          const carSprite = new Sprite(texture);
          // Position the cars one below the other
          carSprite.x = 300; // Set X position to a fixed value (50 pixels from the left)
          carSprite.y = 200 + index * 300;
          carSprite.anchor.set(0.5);
          carSprite.interactive = true;
          carSprite.buttonMode = true;
          carSprite.scale.set(0.3);
          carSprite.on('pointerdown', () => {
            if (!raceEnded) { // Check if the race has not ended
              setSelectedCar(index); // Set the selected car
            }
          });

          if (app && app.stage) {
            console.log('Adding car sprite to the stage:', carSprite);
            app.stage.addChild(carSprite); // Add car sprite to the stage
          } else {
            console.error('app or app.stage is null');
          }
        };
        image.src = car.image;
      });

      console.log('End of forEach loop');
    } catch (error) {
      console.error('Error initializing PixiJS application:', error);
    }

    // Cleanup on unmount
    return () => {
      if (appRef.current) appRef.current.destroy(true, true);
    };
  }, [cars]);

  useEffect(() => {
    if (!appRef.current || !appRef.current.stage) return;

    console.log('PixiJS application stage:', appRef.current.stage);

    // Game loop for car movement
    appRef.current.ticker.add(() => {
      if (selectedCar !== null && !raceEnded) {
        const car = appRef.current.stage.children[selectedCar];
        if (car) {
          if (keys['ArrowUp']) car.y -= 2;
          if (keys['ArrowDown']) car.y += 2;
          if (keys['ArrowLeft']) car.x -= 2;
          if (keys['ArrowRight']) car.x += 2;

          // Check if car reaches the right edge of the screen
          if (car.x + car.width / 2 >= window.innerWidth) {
            // Set the race as ended
            setRaceEnded(true);
            // Display winner text
            const winnerText = new Text(`Winner: ${cars[selectedCar].name}`, {
              fill: 'white',
              fontSize: 25,
            });
            winnerText.anchor.set(0.5);
            winnerText.x = window.innerWidth / 2;
            winnerText.y = window.innerHeight / 2;
            appRef.current.stage.addChild(winnerText);
          }
        }
      }
    });
  }, [selectedCar, keys, raceEnded, cars]);

  // Key down event listener
  useEffect(() => {
    const handleKeyDown = (e) => setKeys((prevKeys) => ({ ...prevKeys, [e.key]: true }));
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Key up event listener
  useEffect(() => {
    const handleKeyUp = (e) => setKeys((prevKeys) => ({ ...prevKeys, [e.key]: false }));
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
<div ref={pixiContainer} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
<p style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: 24 }}>Let's Race</p>
    </div>
  );
};

export default PixiComponent;
