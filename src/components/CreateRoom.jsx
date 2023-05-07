import React, { useEffect, useState } from "react";
import GridTalemaker from "./GridTalemaker.jsx";
import { NavLink } from "react-router-dom";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

const colorsGrayBlue = ["bg-gray-600", "bg-blue-600"];

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

  async function writeGrid() {
    set(ref(db, code), { code: code });
  }

  // return code while the component is mounting
  // in the dom
  if (!code) return;

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
      <GridTalemaker roomCode={code} colors={colorsGrayBlue} />

      <NavLink to="/maelstrom">
        <button
          onClick={writeGrid}
          className="bg-green-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        >
          Create Room
        </button>
      </NavLink>
    </div>
  );
}

export default CreateRoom;
