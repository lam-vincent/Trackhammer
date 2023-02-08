import React, { useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

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
    <div name="carousel" className="h-screen w-full flex items-center justify-center mt-8 rounded-3xl">
      
      <button className="absolute left-16 text-white hover:text-blue-500" onClick={handlePrevClick}>
        
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
      </svg>

      </button>

      <img src={slides[currentSlide]} alt="Slide" className="w-full h-full rounded-3xl"/>
      
      <button className="absolute right-16 text-white hover:text-blue-500" onClick={handleNextClick}>
      
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
      </svg>
      
      </button>
    </div>
  );
};

export default Carousel;
