import React, { useEffect, useRef } from "react";
import {
  Application,
  Assets,
  AnimatedSprite,
  Sprite,
  Texture,
  Text,
  TextStyle,
} from "pixi.js";

const Entry = () => {
  const pixiContainer = useRef(null);
  const appRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const continueTextRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const createPixiApp = async () => {
      try {
        const app = new Application({
          resizeTo: window,
          backgroundColor: 0x061639,
          antialias: true,
          autoDensity: true,
          resolution: devicePixelRatio,
        });

        if (pixiContainer.current) {
          pixiContainer.current.appendChild(app.view);
        } else {
          console.error("pixiContainer.current is null");
          return;
        }

        app.renderer.resize(window.innerWidth, window.innerHeight);

        appRef.current = app;

        const texture = await Assets.load(
          "https://pixijs.com/assets/spritesheet/mc.json"
        );

        const explosionTextures = [];
        for (let i = 0; i < 26; i++) {
          const texture = Texture.from(`Explosion_Sequence_A ${i + 1}.png`);
          explosionTextures.push(texture);
        }

        for (let i = 0; i < 50; i++) {
          const explosion = new AnimatedSprite(explosionTextures);

          explosion.x = Math.random() * app.screen.width;
          explosion.y = Math.random() * app.screen.height;
          explosion.anchor.set(0.5);
          explosion.rotation = Math.random() * Math.PI;
          explosion.scale.set(0.75 + Math.random() * 0.5);
          explosion.gotoAndPlay((Math.random() * 26) | 0);
          app.stage.addChild(explosion);
        }

        const textStyle = new TextStyle({
          fontFamily: "Tourney, Arial, sans-serif",
          fill: ["#ffffff", "#ff9999"],
          fontSize: 48,
          fontWeight: "bold",
          stroke: "#4a1850",
          strokeThickness: 5,
          dropShadow: true,
          dropShadowColor: "#000000",
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
        });

        const welcomeText = new Text("Welcome to Our Showroom", textStyle);
        welcomeText.anchor.set(0.5);
        welcomeText.x = app.screen.width / 2;
        welcomeText.y = app.screen.height / 2 - 100;

        app.stage.addChild(welcomeText);
        welcomeTextRef.current = welcomeText;

        const continueTextStyle = new TextStyle({
          fontFamily: "Tourney, Arial, sans-serif",
          ...textStyle,
          fontSize: 36,
          fontWeight: "normal",
          fill: "#ffffff",
        });

        const continueText = new Text(
          "Continue to Our Page",
          continueTextStyle
        );
        continueText.anchor.set(0.5);
        continueText.x = app.screen.width / 2;
        continueText.y = app.screen.height / 2 + 50;
        continueText.interactive = true;
        continueText.buttonMode = true;
        continueText.on("click", () => {
          window.location.href = "https://www.example.com";
        });

        app.stage.addChild(continueText);
        continueTextRef.current = continueText;

        const carTexture = await Assets.load(
          process.env.PUBLIC_URL + "/greenCar2.png"
        );
        const car = new Sprite(carTexture);
        car.anchor.set(0.5);
        car.scale.set(0.4);
        car.y = app.screen.height - 50;
        car.x = 0;

        app.stage.addChild(car);
        carRef.current = car;
        app.ticker.add((delta) => {
          const carSpeed = 5 * delta;

          carRef.current.x += carSpeed;

          if (carRef.current.x > app.screen.width + carRef.current.width / 2) {
            carRef.current.x = -carRef.current.width / 2;
          }
        });

        app.start();
      } catch (error) {
        console.error("Error initializing PixiJS application:", error);
      }
    };

    createPixiApp();

    const handleResize = () => {
      if (appRef.current) {
        appRef.current.renderer.resize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (appRef.current) appRef.current.destroy(true, true);
    };
  }, []);

  return (
    <div
      ref={pixiContainer}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    ></div>
  );
};

export default Entry;
