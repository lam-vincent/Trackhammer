import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Carousel from "/src/components/Carousel.jsx";
import Timer from "/src/components/Timer";
import EnterRoom from "/src/components/EnterRoom";
import EnterEternal from "/src/components/EnterEternal";
import CreateRoom from "/src/components/CreateRoom";

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
            backgroundImage: `url(/Trackhammer/home-page-background.png)`,
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

      <Carousel />

      <div
        name="how-does-it-work"
        className="h-auto w-full flex flex-col items-center justify-center mt-8 rounded-3xl py-8"
        style={{
          backgroundImage: `url(/Trackhammer/home-page-background.png)`,
        }}
      >
        <h1 name="title" className="text-5xl font-bold text-white">
          How to use our website ?
        </h1>
        <div
          name="container"
          className="flex items-center justify-center mt-8 space-x-8"
        >
          <ol
            name="description"
            className="list-decimal text-white max-w-lg border-2 p-8 rounded-lg space-y-8 py-8"
          >
            <li>Create a Room with Talemaker</li>
            <ul className="list-disc ml-4">
              <li>Visit the Talemaker section on the website</li>
              <li>Design the layout of the map and click "Create"</li>
              <li>Share the room code with other players to join the room</li>
            </ul>
            <li>Join a Room with Maëlstrom</li>
            <ul className="list-disc ml-4">
              <li>Visit the Maëlstrom section on the website</li>
              <li>
                Enter the room code provided by the room creator and click
                "Join"
              </li>
              <li>Wait for other players to join the room</li>
            </ul>
            <li>Play and Record the Battle</li>
            <ul className="list-disc ml-4">
              <li>
                Click the "Generate Settings" button to generate the random
                battle settings
              </li>
              <li>
                Play the battle in real life according to the generated settings
              </li>
              <li>
                Record the result of the battle by filling out the form in the
                "Create Historic" section
              </li>
              <li>
                Update the faction ownership of each hexagon on the grid by
                clicking on them. The ownership will alternate between the
                factions.
              </li>
            </ul>
          </ol>
          <img
            className="object-contain h-auto w-7/12 rounded-xl"
            src="/Trackhammer/inGame.gif"
            alt="A cool animated GIF"
          />
        </div>
      </div>

      <div
        id="eternal"
        className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl space-y-4"
        style={{
          backgroundImage: `url(/Trackhammer/home-page-background.png)`,
        }}
      >
        <h1 className="text-5xl font-bold text-white">
          Enter a Public Room - Eternal War
        </h1>
        <div name="clock" className="text-white">
          <Timer />
        </div>
        <EnterEternal />
      </div>

      <div id="talemaker">
        <CreateRoom code={code} />
      </div>

      <div
        id="maelstrom"
        className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl"
        style={{
          backgroundImage: `url(/Trackhammer/home-page-background.png)`,
        }}
      >
        <h1 className="text-5xl font-bold text-white">
          Enter a Private Room - Maëlstrom
        </h1>
        <EnterRoom code={code} setCode={setCode} />
      </div>
    </div>
  );
};

export default Home;
