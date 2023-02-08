import {Link} from "react-scroll";
import Carousel from "./Carousel.jsx";

const slides = [
  "src/assets/home.png",  
  "src/assets/eternal.png",
  "src/assets/maelstrom.png",
  "src/assets/talemaker.png",  
]

const Home = () => {

  return (
    <div>
      <div className="flex flex-col justify-center h-screen bg-cover bg-center p-32 rounded-3xl" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <div className='flex flex-col items-center backdrop-blur-md rounded-3xl p-4 mb-32'>
        <h1 className="text-5xl font-bold text-white mb-10">Welcome to TrackHammer</h1>
        <p className="text-lg text-white mb-10">TrackHammer is an online application for wargamers that helps them keep track of their scores during tabletop battles. The app has three different modes to choose from: you can join the ongoing war in "Eternal War", or start your own custom crusade with friends in "Maëlstrom" and "The TaleMaker". The app is designed to make it easier for wargamers to track their progress and stay engaged in the games they love.</p>
          <Link to="carousel" spy={true} smooth={true} duration={1750}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Explore
            </button> 
          </Link>
        </div>
      </div>

      <Carousel></Carousel>

      <div className="h-screen w-full flex items-center justify-center bg-current mt-8 rounded-3xl">
        <h1 className="text-5xl font-bold text-white">How does it work ?</h1>
      </div>

      <div className="h-screen w-full flex items-center justify-center bg-current mt-8 rounded-3xl">
        <h1 className="text-5xl font-bold text-white">Eternal War</h1>
      </div>

      <div className="h-screen w-full flex items-center justify-center bg-current mt-8 rounded-3xl">
        <h1 className="text-5xl font-bold text-white">Maëlstrom</h1>
      </div>

      <div className="h-screen w-full flex items-center justify-center bg-current mt-8 rounded-3xl">
        <h1 className="text-5xl font-bold text-white">The TaleMaker</h1>
      </div>

    </div>
  );
};

export default Home;