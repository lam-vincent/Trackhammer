import React, { useEffect, useState } from "react";
import CreateGrid from "./CreateGrid.jsx";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

const colors = [
  "",
  "bg-gray-600",
  "bg-red-600",
  "bg-green-600",
  "bg-blue-400",
  "bg-blue-800",
  "bg-purple-600",
  "bg-pink-400",
];

function CreateRoom({ code }) {
  //rowIndex * NB_COLS + colIndex
  // 0-->8
  // 10-->19
  // 20-->28
  // 30-->39
  const [hexagons, setHexagons] = useState([]);

  useEffect(() => {
    const hexaCpy = [];
    for (let i = 0; i < 100; i++) {
      hexaCpy.push({
        colorIndex: 0,
        isLocked: true,
      });
    }
    setHexagons(hexaCpy);
  }, []);

  async function createRoom() {
    set(ref(db, `${code}/hexagons`), hexagons);
  }

  // return code while the component is mounting
  // in the dom
  if (!code) return;

  return (
    <div
      name="the-talemaker"
      className="w-full flex flex-col items-center justify-center mt-8 rounded-3xl"
      style={{ backgroundImage: `url(/home-page-background.png)` }}
    >
      <h1 className="text-5xl font-bold text-white my-2">
        Create a Room - TaleMaker
      </h1>
      <CreateGrid
        colors={colors}
        hexagons={hexagons}
        setHexagons={setHexagons}
      />

      <a href="#maelstrom">
        <button
          onClick={createRoom}
          className="bg-green-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded my-2"
        >
          Create
        </button>
      </a>
    </div>
  );
}

export default CreateRoom;
