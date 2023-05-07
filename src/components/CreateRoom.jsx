import React from "react";
import Grid from "./Grid.jsx";

const colorsGrayBlue = ["bg-gray-600", "bg-blue-600"];

function CreateRoom() {
  async function handleClick() {}
  return (
    <div
      name="the-talemaker"
      className="h-screen w-full flex flex-col items-center justify-center mt-8 rounded-3xl"
      style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}
    >
      <h1 className="text-5xl font-bold text-white">The TaleMaker</h1>
      <div name="message" className="text-white">
        select the hexagons that you want to keep by clicking on them
      </div>
      <Grid colors={colorsGrayBlue} />

      <button onClick={handleClick}></button>
    </div>
  );
}

export default CreateRoom;
