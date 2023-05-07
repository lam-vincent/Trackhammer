import React, { useEffect, useState } from "react";
import CreateHexagon from "./CreateHexagon";

const NB_ROWS = 10;
const NB_COLS = 10;

function Grid({ colors, hexagons, setHexagons }) {
  return (
    <div className="flex justify-center my-24 border-2 rounded-xl pt-3">
      <div className="flex flex-col items-center">
        {Array.from({ length: NB_ROWS }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex gap-1 ${rowIndex % 2 === 0 && "-my-2.5"}`}
          >
            {Array.from({
              length: rowIndex % 2 === 0 ? NB_COLS - 1 : NB_COLS,
            }).map((_, colIndex) => (
              <CreateHexagon
                key={colIndex}
                index={rowIndex * NB_COLS + colIndex}
                colorsProps={colors}
                hexagons={hexagons}
                setHexagons={setHexagons}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
