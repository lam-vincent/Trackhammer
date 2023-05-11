import { useState } from "react";

function CreateHexagon({ index, colorsProps, hexagons, setHexagons }) {
  const [localColor, setLocalColor] = useState("");
  const style = {
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };

  function updateHexagons() {
    const hexaCpy = [...hexagons];
    const newColorIndex =
      hexaCpy[index].colorIndex + 1 === colorsProps.length
        ? 0
        : hexaCpy[index].colorIndex + 1;

    setLocalColor(colorsProps[newColorIndex]);

    hexaCpy[index].colorIndex = newColorIndex;
    hexaCpy[index].isLocked = newColorIndex === 0;

    console.log(index, hexaCpy);
    setHexagons(hexaCpy);
  }

  return (
    <div
      onClick={updateHexagons}
      className={`w-16 h-16 ${localColor}`}
      style={style}
    ></div>
  );
}

export default CreateHexagon;
