import React, { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

function Hexagon({ index, colorsProps, roomCode }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    updateHexagon("bg-blue-600", false);
    console.log("update hexa");
  }, []);

  async function updateHexagon(color, visible) {
    set(ref(db, `${roomCode}/hexagons/${index}`), {
      color,
      visible,
    });
  }

  function handleChange() {
    setColorIndex((prev) => (prev + 1 === colorsProps.length ? 0 : prev + 1));
    updateHexagon(
      colorsProps[colorIndex + 1 === colorsProps.length ? 0 : 1],
      colorIndex === 0
    );
  }

  const style = {
    backgroundColor: colorsProps[colorIndex],
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  return (
    <div
      onClick={handleChange}
      className={`w-16 h-16 ${colorsProps[colorIndex]}`}
      style={style}
    ></div>
  );
}

export default Hexagon;
