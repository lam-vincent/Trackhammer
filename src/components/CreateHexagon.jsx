import React, { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { db } from "../firebase";

function CreateHexagon({
  index,
  colorsProps,
  hexagons,
  setHexagons,
  isLocked,
  setIsLocked,
}) {
  const [localColorIndex, setColorIndex] = useState(0);

  async function addDataToUseState() {
    setColorIndex((prev) => (prev + 1 === colorsProps.length ? 0 : prev + 1));
    const hexaCpy = [...hexagons];
    hexaCpy[index] =
      localColorIndex + 1 === colorsProps.length ? 0 : localColorIndex + 1;
    setHexagons(hexaCpy);
    console.log("hexaCpy", hexaCpy);

    const isLockedCpy = [...isLocked];
    const hexagon = hexagons[index];
    isLockedCpy[index] = hexaCpy === 0 ? 1 : 0; //don't go back to 1 :skull:
    console.log(hexagon === 0);
    setIsLocked(isLockedCpy);
    console.log("isLockedCpy", isLockedCpy);
  }

  const style = {
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  return (
    <div
      onClick={addDataToUseState}
      className={`w-16 h-16 ${colorsProps[localColorIndex]}`}
      style={style}
    ></div>
  );
}

export default CreateHexagon;
