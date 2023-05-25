import React, { useState } from "react";
import { Link } from "react-scroll";

const slides = [
  "public/home.png",
  "public/eternal.png",
  "public/maelstrom.png",
  "public/talemaker.png",
];

const anchors = ["how-does-it-work", "eternal", "maelstrom", "talemaker"];

const texts = [
  "Follow these steps to get ready for the battlefield",
  "In the Grim Darkness of the far future, there is only war. Join the whole world in an indomitable crusade. Everyone is playing on the same map. Will you contribute to the war effort and makes your faction triumph ?",
  "Maim ! Burn ! Let there be carnage !  Join your friends in an ongoing campaign up to twelve player. Carves your own legends in the darkness of the 41st millenium and let your army be remembered for the eons to come.",
  "The power of the machine god invest thee. Live ! Design your map using our tool and create your very own narrative to make the best experience available for up to twelve player, the only limit is your imagination. Be aware that this feature can only be used by  contributor account.",
];

const titles = [
  "How does it work ?",
  "Eternal War",
  "Maelström of War",
  "The Talemaker",
];

const buttons = ["Click me", "Play now", "Enter a room", "Start your campaign"];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div
      name="carousel"
      className="h-screen w-full flex items-center justify-center mt-8 px-4"
    >
      <div className="absolute px-8 w-full h-full">
        <img src={slides[currentSlide]} className="w-full h-full rounded-3xl" />
      </div>

      <div name="chevron-1" className="flex items-center justify-center grow-0">
        <button
          className="z-10 text-white hover:text-blue-500"
          onClick={handlePrevClick}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="arrow-alt-circle-left"
            className="w-8 h-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
            ></path>
          </svg>
        </button>
      </div>

      <div
        name="container"
        className="flex-col items-center justify-center grow"
      >
        <div name="title" className="flex items-center justify-center">
          <span className="z-10 rounded-3xl p-8 pt-5 item bg-black bg-opacity-50 text-white text-7xl">
            {titles[currentSlide]}
          </span>
        </div>
        <div name="content" className="flex items-center justify-center">
          <div
            name="text"
            className="flex items-center justify-center rounded-xl p-8 m-4 bg-black bg-opacity-50 text-white backdrop-blur-md"
          >
            <div className="grid place-items-center max-w-xl">
              {texts[currentSlide]}
            </div>
            <div
              name="button"
              className="flex items-center justify-center ml-8"
            >
              <Link
                to={anchors[currentSlide]}
                spy={true}
                smooth={true}
                duration={1000}
              >
                <button className="z-10 bg-green-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  {buttons[currentSlide]}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div name="chevron-2" className="flex items-center justify-center grow-0">
        <button
          className="z-10 text-white hover:text-blue-500"
          onClick={handleNextClick}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="arrow-alt-circle-right"
            className="w-8 h-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
