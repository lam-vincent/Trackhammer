import React, { useEffect, useState } from "react";
import Hexagon from "./Hexagon";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const NB_ROWS = 10;
const NB_COLS = 10;

function Grid({ roomCode, colors }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    onValue(ref(db, roomCode), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setData(data);
    });
  }, []);

  if (!roomCode) return;
  if (!data) return;

  return (
    <div className="flex justify-center my-4 rounded-xl pt-3">
      <div className="flex flex-col items-center border-2 p-8 rounded-lg">
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
                index={rowIndex * NB_COLS + colIndex - Math.ceil(rowIndex / 2)}
                colorsProps={colors}
                roomCode={roomCode}
                colorIndex={
                  data.hexagons[rowIndex * NB_COLS + colIndex]?.colorIndex
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
