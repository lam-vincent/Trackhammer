import React from "react";
import Hexagon from "./Hexagon";

const NB_ROWS = 10;
const NB_COLS = 10;

function GridTalemaker({ roomCode, colors }) {
  // console.log("In the grid component", colors.colors);
  let index = 0;
  return (
    <div className="flex justify-center my-24">
      <div className="flex flex-col items-center">
        {Array.from({ length: NB_ROWS }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex gap-1 ${rowIndex % 2 === 0 && "-my-2.5"}`}
          >
            {Array.from({
              length: rowIndex % 2 === 0 ? NB_COLS - 1 : NB_COLS,
            }).map((_, colIndex) => (
              <Hexagon
                key={colIndex}
                index={rowIndex * NB_COLS + colIndex}
                colorsProps={colors}
                roomCode={roomCode}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridTalemaker;
