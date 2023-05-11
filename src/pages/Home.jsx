import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Carousel from "/src/components/Carousel.jsx";
import Timer from "/src/components/Timer";
import EnterRoom from "/src/components/EnterRoom";
import EnterEternal from "/src/components/EnterEternal";
import CreateRoom from "/src/components/CreateRoom";

const slides = [
  "src/assets/home.png",
  "src/assets/eternal.png",
  "src/assets/maelstrom.png",
  "src/assets/talemaker.png",
];

const Home = () => {
  const [code, setCode] = useState("Qdly9");

  function generateCode() {
    let code = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return code;
  }

  useEffect(() => {
    setCode(generateCode());
  }, []);
  return (
    <div className="flex-col items-center justify-center px-8">
      <div className="">
        <div
          className="flex flex-col justify-center h-screen bg-cover bg-center p-8 rounded-3xl"
          style={{
            backgroundImage: `url(src/assets/home-page-background.png)`,
          }}
        >
          <div className="flex flex-col items-center backdrop-blur-md rounded-3xl p-4 mb-32">
            <h1 className="text-5xl font-bold text-white mb-10">
              Welcome to TrackHammer
            </h1>
            <p className="text-lg text-white mb-10 mx-64">
              TrackHammer is an online application for wargamers that helps them
              keep track of their scores during tabletop battles. The app has
              three different modes to choose from: you can join the ongoing war
              in "Eternal War", or start your own custom crusade with friends in
              "Maëlstrom" and "The TaleMaker". The app is designed to make it
              easier for wargamers to track their progress and stay engaged in
              the game they love.
            </p>
            <Link to="carousel" spy={true} smooth={true} duration={1000}>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Carousel></Carousel>

      <div
        name="how-does-it-work"
        className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl"
        style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}
      >
        <h1 name="title" className="text-5xl font-bold text-white">
          How does it work ?
        </h1>
        <div
          name="container"
          className="flex items-center justify-center my-8 space-x-8"
        >
          <ol name="description" className="list-decimal text-white max-w-lg">
            <li className="pt-4">
              Once connected, give to each player a color depicting their army.
            </li>
            <li className="pt-4">
              Play a game of warhammer 40k on an hexagon in common with another
              color, the app will generate a random scenario for your game.
            </li>
            <li className="pt-4">
              Once the game played, choose the color of the hexagon of the
              player who won by clicking on it. If you're playing in Eternal War
              mode, this step will require a special code.
            </li>
          </ol>
          <img
            className="object-contain h-auto w-2/4"
            src={slides[0]}
            alt="home-image"
          />
        </div>
        <div name="tagline" className="flex items-center justify-center">
          <span className="text-white">
            Congrats, you're now ready to scour the battlefield !
          </span>
        </div>
      </div>

      <div
        id="eternal"
        className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl space-y-4"
        style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}
      >
        <h1 className="text-5xl font-bold text-white">
          Enter a Public - Eternal War
        </h1>
        <div name="clock" className="text-white">
          <Timer />
        </div>
        <EnterEternal />
      </div>

      <div
        id="maelstrom"
        className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl"
        style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}
      >
        <h1 className="text-5xl font-bold text-white">
          Enter a Private Room - Maëlstrom
        </h1>
        <EnterRoom code={code} setCode={setCode} />
      </div>

      <div id="talemaker">
        <CreateRoom code={code} />
      </div>
    </div>
  );
};

export default Home;
