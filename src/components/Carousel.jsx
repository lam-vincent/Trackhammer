import React, { useState } from "react";

const slides = [
  "src/assets/home.png",  
  "src/assets/eternal.png",
  "src/assets/maelstrom.png",
  "src/assets/talemaker.png",  
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div name="carousel" className="h-screen w-full flex items-center justify-center mt-8 px-4">
      
      <button className="z-10 text-white hover:text-blue-500" onClick={handlePrevClick}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" class="w-8 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
        </svg>
      </button>

      <img src={slides[currentSlide]} alt="Slide" className="absolute px-8 w-full h-full"/>

      <div className="grid place-items-center rounded-xl p-4 m-4 bg-black bg-opacity-50 text-white backdrop-blur-md">
        <span>Eternal War</span>
        <span>In the Grim Darkness of the far future, there is only war.</span>
        <span>Join the whole world in an indomitable crusade. Everyone is playing on the same map. Will you contribute to the war effort and makes your faction triumph ?</span>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          play now
        </button> 
      </div>

      <div className="grid place-items-center rounded-xl p-4 m-4 bg-black bg-opacity-50 text-white backdrop-blur-md">
        <span>Eternal War</span>
        <span>In the Grim Darkness of the far future, there is only war.</span>
        <span>Join the whole world in an indomitable crusade. Everyone is playing on the same map. Will you contribute to the war effort and makes your faction triumph ?</span>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          play now
        </button> 
      </div>

      <button className="z-10 text-white hover:text-blue-500" onClick={handleNextClick}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" class="w-8 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
