import React, { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { db } from "../firebase";

function Hexagon({ index, colorsProps, hexagons, setHexagons }) {
  const [localColorIndex, setColorIndex] = useState(0);

  async function handleChange() {
    setColorIndex((prev) => (prev + 1 === colorsProps.length ? 0 : prev + 1));
    const hexaCpy = [...hexagons];
    hexaCpy[index] =
      localColorIndex + 1 === colorsProps.length ? 0 : localColorIndex + 1;
    setHexagons(hexaCpy);
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
