import React, { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { db } from "../firebase";

function Hexagon({ index, colorsProps, roomCode, colorIndex }) {
  const [localColorIndex, setColorIndex] = useState(colorIndex);

  async function updateHexagon(i) {
    await set(ref(db, `${roomCode}/hexagons/${index}`), {
      colorIndex: i,
    });
  }

  async function handleChange() {
    setColorIndex((prev) => (prev + 1 === colorsProps.length ? 0 : prev + 1));
    await updateHexagon(localColorIndex);
  }

  const style = {
    backgroundColor: colorsProps[localColorIndex],
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  return (
    <div
      onClick={handleChange}
      className={`w-16 h-16 ${colorsProps[localColorIndex]}`} //colorsProps useless ???
      style={style}
    ></div>
  );
}

export default Hexagon;
