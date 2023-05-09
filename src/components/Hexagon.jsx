import React, { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { db } from "../firebase";

function Hexagon({ index, colorsProps, roomCode, colorIndex }) {
  const [localColorIndex, setColorIndex] = useState(colorIndex);

  useEffect(() => {
    setColorIndex(colorIndex);
  }, [colorIndex]);

  async function updateHexagon(i) {
    await set(ref(db, `${roomCode}/hexagons/${index}`), {
      colorIndex: i,
    });
  }

  async function handleChange() {
    setColorIndex((prev) => (prev + 1 === colorsProps.length ? 0 : prev + 1));
    updateHexagon(
      localColorIndex + 1 === colorsProps.length ? 0 : localColorIndex + 1
    );
  }

  const style = {
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  return (
    <div
      onClick={handleChange}
      className={`w-16 h-16 ${colorsProps[localColorIndex]}`}
      style={style}
    ></div>
  );
}

export default Hexagon;
