import React from "react";

function CreateHexagon({ index, colorsProps, hexagons, setHexagons }) {
  const style = {
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  const hexagonCurrentColor = () => {
    const hexagon = hexagons[index];
    if (!hexagon) {
      return "";
    }
    const colorIndex = hexagon.colorIndex;
    console.log(colorsProps);
    return colorsProps[colorIndex];
  };

  function updateHexagons() {
    setHexagons((prev) => {
      const prevCpy = [...prev];
      prevCpy[index].colorIndex =
        prevCpy[index].colorIndex + 1 === colorsProps.length
          ? 0
          : prevCpy[index].colorIndex + 1;

      const isLocked = prevCpy[index].colorIndex === 0;
      // const prevCpy[index].isLocked = prevCpy[index].colorIndex === 0;

      prevCpy[index].isLocked = prevCpy[index].colorIndex === 0;

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
