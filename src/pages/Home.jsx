import {Link} from "react-scroll";
import Carousel from "/src/components/Carousel.jsx";
import { NavLink } from "react-router-dom";
import Timer from '/src/components/Timer';
import FormMaelstrom from '/src/components/FormMaelstrom';
import FormTalemaker from '/src/components/FormTalemaker';

const slides = [
  "src/assets/home.png",  
  "src/assets/eternal.png",
  "src/assets/maelstrom.png",
  "src/assets/talemaker.png",  
]

const Home = () => {

  return (
    <div className="flex-col items-center justify-center px-8">
    <div className="">
      <div className="flex flex-col justify-center h-screen bg-cover bg-center p-8 rounded-3xl" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <div className='flex flex-col items-center backdrop-blur-md rounded-3xl p-4 mb-32'>
        <h1 className="text-5xl font-bold text-white mb-10">Welcome to TrackHammer</h1>
        <p className="text-lg text-white mb-10">TrackHammer is an online application for wargamers that helps them keep track of their scores during tabletop battles. The app has three different modes to choose from: you can join the ongoing war in "Eternal War", or start your own custom crusade with friends in "Maëlstrom" and "The TaleMaker". The app is designed to make it easier for wargamers to track their progress and stay engaged in the game they love.</p>
          <Link to="carousel" spy={true} smooth={true} duration={1750}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Explore
            </button> 
          </Link>
        </div>
      </div>
    </div>

      <Carousel></Carousel>

      <div name="how-does-it-work" className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <h1 name="title" className="text-5xl font-bold text-white">
          How does it work ?
        </h1>
        <div name="container" className="flex items-center justify-center my-8 space-x-8">
          <ol name="description" class="list-decimal text-white max-w-lg">
            <li className="pt-4">Once connected, give to each player a color depicting their army.</li>
            <li className="pt-4">Play a game of warhammer 40k on an hexagon in common with another color, the app will generate a random scenario for your game.</li>
            <li className="pt-4">Once the game played, choose the color of the hexagon of the player who won by clicking on it. If you're playing in Eternal War mode, this step will require a special code.</li>
          </ol>
          <img className="object-contain h-auto w-2/4" src={slides[0]} alt="home-image" />
        </div>
        <div name="tagline" className="flex items-center justify-center">
          <span className="text-white">
            Congrats, you're now ready to scour the battlefield !
          </span>
        </div>
      </div>

      <div name="eternal-war" className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl space-y-4" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <h1 className="text-5xl font-bold text-white">Eternal War</h1>
        <div name="message" className="text-white">make sure to be sign in</div>
        <div name="clock" className="text-white">
          <Timer />
        </div>
        <NavLink to="/eternal">
          <button className="bg-green-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
            Enter the Eternal War
          </button>
        </NavLink>
      </div>

      <div name="maelstrom" className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <h1 className="text-5xl font-bold text-white">Maëlstrom</h1>
        <div name="message" className="text-white">make sure to be sign in</div>
        <FormMaelstrom />
      </div>

      <div name="the-talemaker" className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <h1 className="text-5xl font-bold text-white">The TaleMaker</h1>
        <div name="message" className="text-white">make sure to be sign in and subscribe</div>
        <a href="https://wahapedia.ru/wh40k9ed/the-rules/arks-of-omen-grand-tournament/" className="text-blue-500 hover:text-green-500">https://wahapedia.ru/wh40k9ed/the-rules/arks-of-omen-grand-tournament/</a>
        <FormTalemaker />
      </div>

    </div>
  );
};

export default Home;