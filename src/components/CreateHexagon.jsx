import React from "react";

function CreateHexagon({ index, colorsProps, hexagons, setHexagons }) {
  const style = {
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  const hexagonCurrentColor = () => {
    const colorIndex = hexagons[index].colorIndex;
    console.log(colorsProps);
    return colorsProps[colorIndex];
  };

  function updateHexagons() {
    setHexagons((prev) => {
      const prevCpy = [...prev];
      prevCpy[index].colorIndex + 1 === prevCpy.length
        ? 0
        : prevCpy[index].colorIndex + 1;

      const isLocked = prevCpy[index].colorIndex === 0;

      prevCpy[index].isLocked = isLocked;

      return prevCpy;
    });
  }

  return (
    <div
      onClick={updateHexagons}
      className={`w-16 h-16 ${hexagonCurrentColor}`}
      style={style}
    ></div>
  );
}

export default CreateHexagon;
