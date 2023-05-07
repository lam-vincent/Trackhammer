import React, { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

function Hexagon({ index, colorsProps, roomCode }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    updateHexagon(false);
    console.log("update hexa");
  }, []);

  async function updateHexagon(visible) {
    set(ref(db, `${roomCode}/hexagons/${index}`), {
      color: colorsProps[colorIndex],
      visible,
    });
  }

  function handleChange() {
    setColorIndex((prev) => (prev + 1 === colorsProps.length ? 0 : prev + 1));
    updateHexagon(colorIndex === 0);
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
