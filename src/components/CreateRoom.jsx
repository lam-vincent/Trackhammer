import React, { useEffect, useState } from "react";
import CreateGrid from "./CreateGrid.jsx";
import { NavLink } from "react-router-dom";
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

function CreateRoom() {
  const [code, setCode] = useState(null);

  function generateCode() {
    let code = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return code;
  }

  useEffect(() => {
    setCode(generateCode());
  }, []);

  //rowIndex * NB_COLS + colIndex
  // 0-->8
  // 10-->19
  // 20-->28
  // 30-->39
  const [hexagons, setHexagons] = useState(new Array(95).fill(0));
  const [isLocked, setIsLocked] = useState(new Array(95).fill(1));

  async function createRoom() {
    let i = 0;
    for (const hexagon of hexagons) {
      const locked = isLocked[i]; //the error is here
      console.log("isLocked", isLocked);
      set(ref(db, `${code}/hexagons/${i}`), {
        colorIndex: hexagon,
        // isLocked: locked, //and here
      });
      if (i % 20 === 8) {
        i += 2;
      } else {
        i++;
      }
    }
  }

  // return code while the component is mounting
  // in the dom
  if (!code) return;

  return (
    <div
      name="the-talemaker"
      className="w-full flex flex-col items-center justify-center mt-8 rounded-3xl"
      style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}
    >
      <h1 className="text-5xl font-bold text-white my-2">The TaleMaker</h1>
      <CreateGrid
        colors={colors}
        hexagons={hexagons}
        setHexagons={setHexagons}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
      />

      <NavLink to={"/maelstrom/" + code}>
        <button
          onClick={createRoom}
          className="bg-green-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded my-2"
        >
          Create Room
        </button>
      </NavLink>
    </div>
  );
}

export default CreateRoom;
